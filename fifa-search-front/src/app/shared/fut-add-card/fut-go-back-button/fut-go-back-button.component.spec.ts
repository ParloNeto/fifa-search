import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FutGoBackButtonComponent } from './fut-go-back-button.component';


describe('GoBackButtonComponent', () => {
  let component: FutGoBackButtonComponent;
  let fixture: ComponentFixture<FutGoBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule, MatButtonModule],
      declarations: [FutGoBackButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutGoBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with "forward" icon and text "Voltar"', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();

    const icon = fixture.nativeElement.querySelector('mat-icon');
    expect(icon.textContent).toContain('forward');

    const buttonText = fixture.nativeElement.textContent.trim();
    expect(buttonText).toContain('Voltar');
  });
});
