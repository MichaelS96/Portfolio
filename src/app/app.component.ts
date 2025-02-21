import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
// import { AboveTheFoldComponent } from "./main-content/above-the-fold/above-the-fold.component";
// import { AboutMeComponent } from "./main-content/about-me/about-me.component";
// import { SkillsComponent } from "./main-content/skills/skills.component";
// import { PortfolioComponent } from "./main-content/portfolio/portfolio.component";
// import { MainContentComponent } from "./main-content/main-content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
