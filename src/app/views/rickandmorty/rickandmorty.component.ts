import { Component, OnInit } from '@angular/core';
import { first, map, Observable, Subscription, take } from 'rxjs';
import { APIrickandmortyService } from 'src/app/services/apirickandmorty.service';
import { RickMorty } from 'src/app/services/rickandmorty.model';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {

characters :any = []
characterService: Subscription;
characterservice$! : Observable<any>;

episodio$! : Observable<any>;

  // - Consultar la API usando servicios
  constructor( public service : APIrickandmortyService) {

    // - Listar los personajes usando una suscripcion
      this.characterService = this.service.getCharacters()
      .pipe(take(1))
      .subscribe(
        res => this.characters = res.results

      )
    // - Listar las ubicaciones usando observables y async
      this.characterservice$ = this.service.getCharacters()
      .pipe(
        map((x :any) =>{
          return x.results;
        })
      )
    // - Listar los personajes a partir de los episodios usando observables, operadores y async, limite 10 episodios
    this.episodio$ = this.service.getCharacters()
    .pipe(
      take(10),
      map((x :any) =>{
        //return console.log(x.results);

        return x.results;
      })
    )
    }


    ngOnDestroy(){
        this.characterService.unsubscribe();
    }

   ngOnInit(): void {









  }



}
// - Crear un input para filtrar personajes usando observables
