import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

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
