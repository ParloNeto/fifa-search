import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationButtonsComponent } from './information-buttons.component';

describe('InformationButtonsComponent', () => {
  let component: InformationButtonsComponent;
  let fixture: ComponentFixture<InformationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
