import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('dialog') dialog!: ElementRef;
  isMenuOpen = false;
  activeSection: string = '';

  constructor(private router: Router, private translate: TranslateService) { }

  navigateToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDialog() {
    if (this.dialog) {
      this.isMenuOpen = !this.isMenuOpen;
      this.dialog.nativeElement.style.display = this.isMenuOpen ? 'block' : 'none';
    }
  }

  ngOnInit() {
    this.setActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.setActiveSection();
  }

  setActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (sectionTop <= viewportHeight / 2 && sectionBottom >= viewportHeight / 2) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    this.activeSection = currentSectionId;
  }

  scrollToSectionDialog(sectionId: string, event: Event) {
    event.preventDefault();

    const headerOffset = 130;

    this.router.navigate(['/']).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  }

  scrollToSectionAndCloseDialog(sectionId: string, event: Event) {
    event.preventDefault();
    
    this.scrollToSectionDialog(sectionId, event);
    this.toggleDialog(); 
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
