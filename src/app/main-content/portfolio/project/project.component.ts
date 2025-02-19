import { Component } from '@angular/core';

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
      description: 'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      link: {
        liveTest: '',
        github: 'https://github.com/MichaelS96/Pokedex',
      },
    },
    {
      name: 'El Pollo Loco',
      image: './assets/img/projects/polloloco.png',
      type: 'JavaScript | HTML | CSS',
      description: 'Springen, Laufen und Werfen ein Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      link: {
        liveTest: '',
        github: 'https://github.com/MichaelS96/El-Pollo-Loco',
      },
    },
  ]
}
