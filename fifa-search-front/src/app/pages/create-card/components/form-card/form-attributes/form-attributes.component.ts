import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClearFieldDirective } from '../../../../../shared/directives/clear-field.directive';

@Component({
    selector: 'app-form-attributes',
    templateUrl: './form-attributes.component.html',
    styleUrls: ['./form-attributes.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, ClearFieldDirective]
})
export class FormAttributesComponent implements OnInit {

  @Output() public sendForm = new EventEmitter<FormGroup>();

  attributeCard: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 

    this.attributeCard = this.formBuilder.group({
      overall: [94, [Validators.maxLength(2), Validators.required]],
      pace: [81, [Validators.maxLength(2), Validators.required]],
      shooting: [92, [Validators.maxLength(2), Validators.required]],
      passing: [89, [Validators.maxLength(2), Validators.required]],
      dribbling: [94, [Validators.maxLength(2), Validators.required]],
      defending: [37, [Validators.maxLength(2), Validators.required]],
      physicality: [67, [Validators.maxLength(2), Validators.required]]
    });

    this.attributeCard.valueChanges.subscribe(() => this.emitsFormValue());
   }
  ngOnInit(): void {
    this.emitsFormValue();
  }

  public emitsFormValue(): void {
    return this.sendForm.emit(this.attributeCard);
  }
  
}
