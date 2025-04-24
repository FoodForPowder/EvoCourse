import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTableComponent } from './lib-table.component';

describe('LibTableComponent', () => {
  let component: LibTableComponent;
  let fixture: ComponentFixture<LibTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
