import { Component, OnInit } from '@angular/core';
import { LatestNews } from '../latestnews.model';
@Component({
  selector: 'app-latest-news-list',
  templateUrl: './latest-news-list.component.html',
  styleUrls: ['./latest-news-list.component.css']
})
export class LatestNewsListComponent implements OnInit {
  latestnews: LatestNews[]=[
    new LatestNews('Heading 1', 'Text1', 'category1'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
