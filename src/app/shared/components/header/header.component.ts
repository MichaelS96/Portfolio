import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeSection: string = ''; // Standardwert setzen

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = [
      { id: 'aboutMe', element: document.getElementById('aboutMe') },
      { id: 'mySkills', element: document.getElementById('mySkills') },
      { id: 'myPortfolio', element: document.getElementById('myPortfolio') }
    ];

    const scrollPosition = window.scrollY + 150; // Offset für fixiertes Header-Element
    let foundActive = false;

    for (let section of sections) {
      if (section.element) {
        const offsetTop = section.element.offsetTop;
        const offsetHeight = section.element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section.id;
          foundActive = true;
          break; // Stoppe die Schleife, sobald eine aktive Sektion gefunden wurde
        }
      }
    }

    if (!foundActive) {
      this.activeSection = ''; // Falls keine Sektion aktiv ist, zurücksetzen
    }

    this.cdr.detectChanges(); // Erzwinge Aktualisierung, damit Angular die Änderungen bemerkt
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
