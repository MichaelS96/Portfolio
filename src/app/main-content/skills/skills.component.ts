import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: { image: string, name: string }[] = [
    {
      image: './assets/img/skills/html.png',
      name: 'HTML'
    },
    {
      image: './assets/img/skills/css.png',
      name: 'CSS'
    },
    {
      image: './assets/img/skills/javascript.png',
      name: 'JavaScript'
    },
    {
      image: './assets/img/skills/api.png',
      name: 'Rest Api'
    },
    {
      image: './assets/img/skills/angular.png',
      name: 'Angular'
    },
    {
      image: './assets/img/skills/git.png',
      name: 'Git'
    },
    {
      image: './assets/img/skills/materialdesign.png',
      name: 'Material Design'
    },
    {
      image: './assets/img/skills/learning.png',
      name: 'Continually Learning'
    },
  ]
}
