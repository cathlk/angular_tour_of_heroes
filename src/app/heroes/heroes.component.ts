import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

// @Component ger metadata för componenten
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  selectedHero: Hero;
  
  constructor() { }

  // lifecycle hook, kallas kort efter comp skapats, bra att lägga init logic här 
  ngOnInit() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
