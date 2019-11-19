import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

// innehåll @Component ger metadata för componenten
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}
  // lifecycle hook, kallas kort efter comp skapats, bra att lägga init logic här
  ngOnInit() {
    this.getHeroes();
  }
 
  //below, critical difference is .subscribe
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
