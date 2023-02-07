import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportilhamentoDadosTexteComponent } from './comportilhamento-dados-texte.component';

describe('ComportilhamentoDadosTexteComponent', () => {
  let component: ComportilhamentoDadosTexteComponent;
  let fixture: ComponentFixture<ComportilhamentoDadosTexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComportilhamentoDadosTexteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComportilhamentoDadosTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
