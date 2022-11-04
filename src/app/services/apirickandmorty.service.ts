import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const CHARACTERS = "https://rickandmortyapi.com/api/character"
const LOCATIONS = "https://rickandmortyapi.com/api/location"
const EPISODES = "https://rickandmortyapi.com/api/episode"

@Injectable({
  providedIn: "root",
})
export class APIrickandmortyService {

constructor(private http: HttpClient) { }


getCharacters():Observable<any>{
  return this.http.get<any>(CHARACTERS)
}

getLocations():Observable<any>{
  return this.http.get<any>(LOCATIONS)
}

getEpisodes():Observable<any>{
  return this.http.get<any>(EPISODES)
}

}
