import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  //! Category Post Array to store all the posts of a particular category from the service

    CategoryPostArray: any[] =[];
    CategoryName: string = '';

  constructor( private route:ActivatedRoute , private postService:PostService) { }

  //! loadCategoryPosts() method to filter the posts by category can be wriiten inside the ngOnInit() 


  loadCategoryPosts(categoryId: string): void {
    this.postService.getPostData().subscribe((data: any) => {
      this.CategoryPostArray = data.posts.filter((post: any) => post.category.categoryId === categoryId);
      if (this.CategoryPostArray.length > 0) {
        this.CategoryName = this.CategoryPostArray[0].category.category;
      }
      console.log("Filtered Array by Category:", this.CategoryPostArray);
    });
  }


  ngOnInit(): void {

    // ? val gives the id from the routing modules when we clicked the category this is another way to get the id from the routing module 
    

    this.route.params.subscribe(val => {
      console.log(val);
      this.loadCategoryPosts(val['id']);
    })
  }

}
