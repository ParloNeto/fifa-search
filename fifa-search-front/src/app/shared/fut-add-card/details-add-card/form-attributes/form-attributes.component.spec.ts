import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttributesComponent } from './form-attributes.component';

describe('FormAttributesComponent', () => {
  let component: FormAttributesComponent;
  let fixture: ComponentFixture<FormAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
