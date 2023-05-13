import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutAddCardComponent } from './fut-add-card-button.component';

describe('FutAddCardComponent', () => {
  let component: FutAddCardComponent;
  let fixture: ComponentFixture<FutAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
