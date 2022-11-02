import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const CHARACTERS = "https://rickandmortyapi.com/api/character"

@Injectable({
  providedIn: "root",
})
export class APIrickandmortyService {

constructor(private http: HttpClient) { }


getCharacters(){
  return this.http.get<any>(CHARACTERS)
}

}
