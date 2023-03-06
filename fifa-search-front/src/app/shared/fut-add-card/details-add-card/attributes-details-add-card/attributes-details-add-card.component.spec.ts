import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDetailsAddCardComponent } from './attributes-details-add-card.component';

describe('AttributesDetailsAddCardComponent', () => {
  let component: AttributesDetailsAddCardComponent;
  let fixture: ComponentFixture<AttributesDetailsAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesDetailsAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesDetailsAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
