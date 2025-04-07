import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponseService } from './services/response.service';
import { Task } from './models/task.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvoCourse';
  tasks!: Task[];

  constructor(private responseService: ResponseService) {}
  ngOnInit(): void {
    this.responseService.GetTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.log('Something went wrong :(');
      },
    });
  }
  TugleTask(taskId: number) {
    this.responseService.ToggleTask(taskId);
  }
}
