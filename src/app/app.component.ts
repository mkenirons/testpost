import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: any = [];

  constructor(private ds:DataService){}

  ngOnInit(){
    this.ds.getPostsData().subscribe(data =>
      {
        this.posts = data.posts;
      });
   }

}
