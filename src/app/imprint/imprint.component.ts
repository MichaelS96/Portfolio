import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private router: Router) { }


}
