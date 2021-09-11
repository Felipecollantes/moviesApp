import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private page: number;
  constructor(private http: HttpClient) {
    this.page = 0;
  }

  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${API_KEY}&language=es&include_image_language=es`;

    return this.http.get(query);
  }

  getFeature() {
    this.page++;
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;

    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const begin = `${today.getFullYear()} - ${monthString}-01`;
    const final = `${today.getFullYear()} - ${monthString}-${lastDay}`;

    // eslint-disable-next-line max-len
    return this.ejecutarQuery(
      `/discover/movie?primary_release_date.gte=&primary_release_date.lte=2019-01-31&page=${this.page}`
      // `/discover/movie?primary_release_date.gte=${begin}&primary_release_date.lte=${final}`
    );
  }
}
