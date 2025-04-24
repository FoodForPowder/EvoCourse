import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoLibComponent } from './evo-lib.component';

describe('EvoLibComponent', () => {
  let component: EvoLibComponent;
  let fixture: ComponentFixture<EvoLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
