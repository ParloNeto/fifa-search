// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { Component, DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// import { UpperCaseDirective } from './upper-case.directive';
// import { FormGroup, FormsModule, NgModel } from '@angular/forms';

// @Component({
//     template: `
//     <input type="text" appUpperCase [(ngModel)]="inputValue">
//   `,
//     standalone: true,
//     imports: [FormsModule]
// })
// class TestComponent {
//   inputValue!: string;
// }

// describe('UpperCaseDirective', () => {
//   let fixture: ComponentFixture<TestComponent>;
//   let component: TestComponent;
//   let inputElement: DebugElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     imports: [FormsModule, UpperCaseDirective, TestComponent]
// });

//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.componentInstance;
//     inputElement = fixture.debugElement.query(By.directive(UpperCaseDirective));
//   });

//   it('should create an instance', () => {
//     const directive = new UpperCaseDirective(inputElement);
//     expect(directive).toBeTruthy();
//   });

//   it('should convert input value to uppercase on input', () => {
//     fixture.detectChanges();
//     const testValue = 'Test Input Value';
//     const input = inputElement.nativeElement;

//     input.value = testValue;
//     input.dispatchEvent(new Event('input'));

//     expect(component.inputValue).not.toEqual(testValue.toUpperCase());
//   });

//   it('should convert input value to uppercase on blur', () => {
//     fixture.detectChanges();
//     const testValue = 'Test Input Value';
//     const input = inputElement.nativeElement;

//     input.value = testValue;
//     input.dispatchEvent(new Event('blur'));

//     expect(component.inputValue).not.toEqual(testValue.toUpperCase());
//   });
// });
