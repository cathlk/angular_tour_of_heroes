import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero' 
import { HeroService } from '../hero.service';

// innehåll @Component ger metadata för componenten
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;

  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  // lifecycle hook, kallas kort efter comp skapats, bra att lägga init logic här 
  ngOnInit() { 
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  // getHeroes(): void {
  //   //returns the mock heroes, would not work w remote server
  //   this.heroes = this.heroService.getHeroes();
  // }
  //below, critical difference is .subscribe 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


}
