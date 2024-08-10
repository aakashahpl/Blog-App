import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  constructor() {}

  @Input() post: {
    postImgName: string;
    _id: string;
    title: string;
    excerpt: string;
    category: {
      categoryId: string;
      category: string;
    };
    views: number;
  } = {
    postImgName: '',
    title: '',
    category: { category: '', categoryId: '' },
    views: 100306,
    excerpt: '',
    _id: '',
  };

  ngOnInit(): void {
    console.log('inside post card ', this.post);
  }
}
