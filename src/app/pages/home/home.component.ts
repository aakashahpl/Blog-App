import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //! Featured Post Array to store all the featured posts from the service

  FeaturedPostArray: any[] =[];
  LatestPostArray: any[] =[];


  constructor(private postService:PostService) { }


  ngOnInit(): void {
    this.postService.getPostData().subscribe((data:any)=>{
      this.FeaturedPostArray = data.posts.slice(0, 4);
      this.LatestPostArray = data.posts
      console.log( "this is the raw Array",this.FeaturedPostArray);
    })
      
  }

}
