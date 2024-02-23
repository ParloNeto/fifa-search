import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttributesComponent } from './form-attributes.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormAttributesComponent', () => {
  let component: FormAttributesComponent;
  let fixture: ComponentFixture<FormAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, FormAttributesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(FormAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form values when form changes', () => {
    // Arrange
    const formValues = {
      overall: 94,
      pace: 81,
      shooting: 92,
      passing: 89,
      dribbling: 94,
      defending: 37,
      physicality: 67
    };
    spyOn(component.sendForm, 'emit');

    component.attributeCard.setValue(formValues);

    expect(component.sendForm.emit).toHaveBeenCalledWith(component.attributeCard);
  });

  it('should emit form values on ngOnInit', () => {
    spyOn(component.sendForm, 'emit');

    component.ngOnInit();

    expect(component.sendForm.emit).toHaveBeenCalledWith(component.attributeCard);
  });
});
