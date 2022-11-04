import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, first, map, Observable, Subscription, take } from 'rxjs';
import { APIrickandmortyService } from 'src/app/services/apirickandmorty.service';


@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {

characters :any = []
characterService: Subscription;
locationservice$! : Observable<any>;

episodio$! : Observable<any>;
search = new FormControl('')
filterCharacter = '';


  // - Consultar la API usando servicios
  constructor( public service : APIrickandmortyService) {

    // - Listar los personajes usando una suscripcion
      this.characterService = this.service.getCharacters()
      .pipe(take(1))
      .subscribe(
        res => this.characters = res.results

      )
    // - Listar las ubicaciones usando observables y async
      this.locationservice$ = this.service.getLocations()
      .pipe(
        map((x :any) =>{
         let locations = x.results.map((data:any)=>{
            return data.name
          })

        return locations

        })
      )

    // - Listar los personajes a partir de los episodios usando observables, operadores y async, limite 10 episodios
    this.episodio$ = this.service.getEpisodes()
    .pipe(
      take(10),
      map((x :any) =>{
        console.log(x.results);

         //return x.results;
      })
    )
    }

    //- Crear un input para filtrar personajes por nombre usando observables
    filter( value: string){
      this.filterCharacter = value
    }


    ngOnInit(): void {

        this.search.valueChanges
        .pipe(
          debounceTime(300)
          )
          .subscribe(name => this.filter(name)

          )
        }

    ngOnDestroy(){
        this.characterService.unsubscribe();

      }


}

