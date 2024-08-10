import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postBackendUrl = 'https://ang-blog-website.vercel.app/post';
 



  getPostData() {
    const axiosConfig: AxiosRequestConfig = {
      method: 'get',
      url: `${this.postBackendUrl}/fetch-all`,
      headers: this.getHeaders(),
    };

    return new Observable((observer) => {
      axios(axiosConfig)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
  getPostImg(imgPath: string) {
    const axiosConfig: AxiosRequestConfig = {
      method: 'get',
      url: `${this.postBackendUrl}/uploads/images/${imgPath}`,
      headers: this.getHeaders(),
    };

    return new Observable((observer) => {
      axios(axiosConfig)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  private getHeaders(): { [key: string]: string } {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };


    return headers;
  }


}
