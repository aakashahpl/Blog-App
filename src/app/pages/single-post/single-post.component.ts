import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postService: PostService ,private route:ActivatedRoute) { 

  }
  SimilarCategoryPostArray: any[] =[];
  SinglePost:any;

  loadSinglePost(postId: string): void {
    this.postService.getPostData().subscribe((data: any) => {
      this.SinglePost = data.posts.find((post: any) => post._id === postId);
      console.log("Single Post:", this.SinglePost);



      //? For the similar posts 
      this.loadSimilarPosts(this.SinglePost.category.categoryId);
      console.log("Similar post array ->",this.SimilarCategoryPostArray);
    });
  }

  loadSimilarPosts(category: string): void {
    this.postService.getPostData().subscribe((data: any) => {
      this.SimilarCategoryPostArray = data.posts.filter((post: any) => post.category.categoryId === category && post._id !== this.SinglePost._id);

    });
  }



  

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      console.log(val);
      this.loadSinglePost(val['id']);
    })
  }


}
