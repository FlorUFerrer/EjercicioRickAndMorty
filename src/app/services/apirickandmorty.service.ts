import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickMorty } from './rickandmorty.model';
import { map } from 'rxjs';
const API_URL = "https://rickandmortyapi.com/api";
const CHARACTERS = "https://rickandmortyapi.com/api/character"

@Injectable({
  providedIn: "root",
})
export class APIrickandmortyService {


  constructor(private http: HttpClient) { }


getRequest(){
 return this.http.get<any>(API_URL)
}

getCharacters(){
  return this.http.get<any>(CHARACTERS)
}

}
