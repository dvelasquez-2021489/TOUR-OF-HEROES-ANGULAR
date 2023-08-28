import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService{

  constructor( private messageService: MessageService, private httpClient: HttpClient) { }


  
  getHero(id: number): Observable<Hero | undefined>{
    const hero = HEROES.find(h => h.id == id);
    this.messageService.add(`We grabbed hero with id of ${id}`);
    return of(hero);
  } 

  getHeroes(): Observable<Hero[]>{
    const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
    this.messageService.add('The HeroService fetch the Heroes');
    return heroes;

  }
}
