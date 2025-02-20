import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  currentFeedbackIndex: number = 0;

  feedbacks: { name: string; feedback: string; role: string; image: string }[] = [
    {
      name: 'Albert',
      feedback: 'Starke arbeit macht spass mit Michael zu arbeiten',
      role: 'Team Partner',
      image: './assets/img/about-me/pb123.png',
    },
    {
      name: 'Rainer',
      feedback: 'Langweiliger Typ',
      role: 'Team Partner',
      image: '',
    },
  ];

  get currentFeedback() {
    return this.feedbacks[this.currentFeedbackIndex];
  }

  showNextFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex + 1) % this.feedbacks.length;
  }

  showPreviousFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  updateFeedbackIndex(index: number) {
    this.currentFeedbackIndex = index;
  }
}
