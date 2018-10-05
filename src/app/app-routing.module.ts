import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
// import { PostDetailComponent } from './posts/post-detail/post-detail.component';
// import { PostListComponent } from './posts/post-list/post-list.component';
import { OpeningsComponent } from './openings/openings.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
   
  // {path: 'postdetail', component: PostDetailComponent },
  { path: 'latestnews', component: LatestNewsComponent },
  
  { path: 'openings', component: OpeningsComponent},
  { path: 'work', component: WorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
    
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
