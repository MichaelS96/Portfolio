import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects: { name: string, image: string, type: string, description: string, link: { liveTest: string, github: string } }[] = [
    {
      name: 'Pokedex',
      image: './assets/img/projects/pokedex.png',
      type: 'JavaScript | HTML | CSS | Api',
      description: 'Auf Grundlage der PokéAPI, einer benutzerfreundlichen Bibliothek, die detaillierte Informationen zu Pokémon erfasst und bereitstellt.',
      link: {
        liveTest: '',
        github: 'https://github.com/MichaelS96/Pokedex',
      },
    },
    {
      name: 'El Pollo Loco',
      image: './assets/img/projects/polloloco.png',
      type: 'JavaScript | HTML | CSS',
      description: 'Springen, rennen und werfen ein spannendes Spiel mit einem objektorientierten Konzept. Begleite Pepe auf seinem Abenteuer, sammle Münzen und scharfe Tabasco-Salsa, um dich der verrückten Henne im ultimativen Duell zu stellen!',
      link: {
        liveTest: '/',
        github: 'https://github.com/MichaelS96/El-Pollo-Loco',
      },
    },
    {
      name: 'Joyn',
      image: './assets/img/projects/joyn.png',
      type: 'JavaScript | HTML | CSS | Angular',
      description: '',
      link: {
        liveTest: '',
        github: '',
      },
    },
  ]
}
