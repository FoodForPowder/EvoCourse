import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Foodie';
  private excludedPaths: string[] = ['/not-found', '/access-denied'];
  showHeaderFooter = true;
  constructor(private router: Router) {}
  private routerSubscription!: Subscription;
  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(() => {
      this.showHeaderFooter = this.shouldShowHeaderFooter(this.router.url);
    });
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private shouldShowHeaderFooter(url: string): boolean {
    const isExcluded = this.excludedPaths.some((path) => url.startsWith(path));
    return !isExcluded;
  }
}
