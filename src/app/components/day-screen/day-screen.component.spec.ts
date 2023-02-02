import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayScreenComponent } from './day-screen.component';

describe('DayScreenComponent', () => {
  let component: DayScreenComponent;
  let fixture: ComponentFixture<DayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
