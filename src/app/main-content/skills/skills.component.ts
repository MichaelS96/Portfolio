import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
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

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 130;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
