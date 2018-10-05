import { Component, OnInit } from '@angular/core';
import { Post } from './post.model'
import { PostService } from './post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  providers: [ PostService ],
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  editPost: Post;
  constructor(private postsService: PostService){ };

  // regModel: Post;

  showNew: Boolean=false;

  // submitType: string='save';

  // selectedRow: number;

  ngOnInit() {
    console.log("in initialize function");
    this.getPosts();
  }

  getPosts(): void { 
    console.log("in get post function");
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
      console.log(this.posts);
  }

  add(title: string, text: string): void {
    
    this.editPost = undefined;
    title = title.trim();
    text = text.trim();
    if (!title || !text) { return; }

    // The server will generate the id for this new post
    const newPost: Post = { title, text} as Post;
    this.postsService.addPost(newPost)
      .subscribe(post => this.posts.push(post));
  }

  onNew(){
    this.showNew = true;
  }
  
  // add() {
  //   // Initiate new registration.
  //   this.editPost = ;
  //   // Change submitType to 'Save'.
  //   this.submitType = 'Save';
  //   // display registration entry section.
  //   this.showNew = true;
  // }

  delete(id: number): void {
    this.postsService.deletePost(id).subscribe()
  }

}
