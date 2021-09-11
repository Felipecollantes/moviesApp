import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getFeature(){
    // eslint-disable-next-line max-len
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=ea095bf9e7e0831f4c5c72719e344d66&language=es&include_image_language=es');
  }
}
