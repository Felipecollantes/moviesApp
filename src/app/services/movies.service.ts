import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetallePelicula, RespuestaCredits } from '../interfaces/interfaces';

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

    return this.ejecutarQuery(
      `/discover/movie?primary_release_date.gte=&primary_release_date.lte=2021-01-31&page=${this.page}`
    );
  }

  getMovieDetails(id: number) {
    return this.ejecutarQuery<DetallePelicula>(`/movie/${id}?a=1`);
  }

  getActors(id: number) {
    return this.ejecutarQuery(`/movie/${id}/credits?a=1`);
  }

  searchMovies(texto: string) {
    return this.ejecutarQuery(`/search/movie?query=${texto}`);
  }
}
