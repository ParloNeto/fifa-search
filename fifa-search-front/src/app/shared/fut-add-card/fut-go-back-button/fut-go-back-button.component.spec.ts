import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutGoBackButtonComponent } from './fut-go-back-button.component';

describe('FutGoBackButtonComponent', () => {
  let component: FutGoBackButtonComponent;
  let fixture: ComponentFixture<FutGoBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutGoBackButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutGoBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
