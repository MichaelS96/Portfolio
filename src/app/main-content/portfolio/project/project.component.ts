import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects: { name: string, image: string, type: string, description: string, link: { liveTest: string, github: string } }[] = [
    {
      name: 'Pokedex',
      image: './assets/img/projects/pokedex.png',
      type: 'JavaScript | HTML | CSS | Api',
      description: 'portfolio.pokedex',
      link: {
        liveTest: 'https://michael-schwittay.de/Pokedex/',
        github: 'https://github.com/MichaelS96/Pokedex',
      },
    },
    {
      name: 'El Pollo Loco',
      image: './assets/img/projects/polloloco.png',
      type: 'JavaScript | HTML | CSS',
      description: 'portfolio.polloloco',
      link: {
        liveTest: 'https://michael-schwittay.de/ElPolloLoco/',
        github: 'https://github.com/MichaelS96/El-Pollo-Loco',
      },
    },
    {
      name: 'Joyn',
      image: './assets/img/projects/joyn.png',
      type: 'JavaScript | HTML | CSS | Angular',
      description: '',
      link: {
        liveTest: 'https://michael-schwittay.de/joinpro/',
        github: 'https://github.com/MichaelS96/Join',
      },
    },
  ]
}
