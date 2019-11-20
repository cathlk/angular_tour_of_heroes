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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
