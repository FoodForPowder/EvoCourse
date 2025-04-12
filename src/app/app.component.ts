import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvoCourse';
  numbers: number[] = [];
  randomNumbers: string[] = [];

  numberSubscription$!: Subscription;
  randomNumberSubscription$!: Subscription;

  ngOnInit() {
    this.initStreams();
  }
  initStreams() {
    const nubmerInterval$ = interval(2000);
    this.numberSubscription$ = nubmerInterval$.subscribe((number) => {
      this.numbers = [...this.numbers, number];
    });
    this.randomNumberSubscription$ = nubmerInterval$
      .pipe(
        map(() => Math.floor(Math.random() * 100)),
        map((num) => `Random Value: ${num}`)
      )
      .subscribe((number) => {
        this.randomNumbers = [...this.randomNumbers, number];
      });
  }
  numberSubscriptionUnsubscribe() {
    this.numberSubscription$.unsubscribe();
  }
  randomNumberSubscriptionUnsubscribe() {
    this.randomNumberSubscription$.unsubscribe();
  }
  resetStreams() {
    this.numberSubscriptionUnsubscribe();
    this.randomNumberSubscriptionUnsubscribe();
    this.numbers = [];
    this.randomNumbers = [];
    this.initStreams();
  }
}
