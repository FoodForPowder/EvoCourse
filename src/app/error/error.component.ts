import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  statusCodeText: string = '404';
  titleText: string = 'Страница не найдена';
  text: string = 'Запрашиваемая страница не существует';
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Получаем данные из маршрута
    this.route.data.subscribe((data) => {
      if (data) {
        this.statusCodeText = data['statusCode'] || '404';
        this.titleText = data['title'] || 'Страница не найдена';
        this.text = data['message'] || 'Запрашиваемая страница не существует';
      }
    });
  }
  goBack(): void {
    const previousUrl = window.history.length > 1;
    if (previousUrl) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
