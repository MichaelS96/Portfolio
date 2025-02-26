import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
