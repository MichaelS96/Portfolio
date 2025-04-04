import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppComponent } from '../app.component';
import { FeedbackComponent } from './portfolio/feedback/feedback.component';
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
