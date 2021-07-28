import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero:Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };

  // heroes = HEROES;
  heroes:Hero[] = [];

  constructor(private heroservice:HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // selectedHero?:Hero;
  // onSelect(hero:Hero){
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected heroid=${hero.id}`);
  // }

  getHeroes():void{
    // this.heroes =  this.heroservice.getHeroes();
    this.heroservice.getHeroes()
      .subscribe(heroes => this.heroes =  heroes);
  }





}
