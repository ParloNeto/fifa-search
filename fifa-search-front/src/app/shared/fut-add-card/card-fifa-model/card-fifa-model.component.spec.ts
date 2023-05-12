import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFifaModelComponent } from './card-fifa-model.component';

describe('CardFifaModelComponent', () => {
  let component: CardFifaModelComponent;
  let fixture: ComponentFixture<CardFifaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFifaModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFifaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
