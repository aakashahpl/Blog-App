import { Injectable } from '@angular/core';
import { Observable, startWith, switchMap } from 'rxjs';
import axios, { AxiosRequestConfig } from 'axios';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categorybackendUrl = 'https://ang-blog-website.vercel.app/category';





  getCategoryData(): Observable<any> {
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => {
        const axiosConfig: AxiosRequestConfig = {
          method: 'get',
          url: `${this.categorybackendUrl}/fetch-all`,
          headers: this.getHeaders(),
          // other configurations as needed
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
      })
    );
  }


  private getHeaders(): { [key: string]: string } {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };


    return headers;
  }

  
}
