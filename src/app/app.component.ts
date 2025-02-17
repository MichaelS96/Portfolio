import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from "./main-content/above-the-fold/above-the-fold.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { AboutMeComponent } from "./main-content/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboveTheFoldComponent, HeaderComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
