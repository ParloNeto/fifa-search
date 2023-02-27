import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAddCardComponent } from './details-add-card.component';

describe('DetailsAddCardComponent', () => {
  let component: DetailsAddCardComponent;
  let fixture: ComponentFixture<DetailsAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
