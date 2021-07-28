import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesSeervice: MessageService) { }

  // getHeroes():Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesSeervice.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id == id);
    this.messagesSeervice.add(`HeroService: fetched hero id = ${id}`);
    return of(hero);
  }

}
