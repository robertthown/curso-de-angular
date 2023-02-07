import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemons } from './pokemon.component';

describe('ListasComponent', () => {
  let component: Pokemons;
  let fixture: ComponentFixture<Pokemons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemons ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokemons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
