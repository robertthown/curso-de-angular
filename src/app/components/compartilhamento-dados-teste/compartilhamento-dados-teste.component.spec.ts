import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhamentoDadosTesteComponent } from './compartilhamento-dados-teste.component';

describe('CompartilhamentoDadosTesteComponent', () => {
  let component: CompartilhamentoDadosTesteComponent;
  let fixture: ComponentFixture<CompartilhamentoDadosTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompartilhamentoDadosTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartilhamentoDadosTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
