import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { FutHeaderComponent } from 'src/app/shared/fut-header/fut-header.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DescriptionPlayerComponent } from './description-player/description-player.component';
import { InformationButtonsComponent } from './information-buttons/information-buttons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent, FutHeaderComponent, CardDetailsComponent, DescriptionPlayerComponent, InformationButtonsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, MaterialModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loading template when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const loadingTemplate = debugElement.query(By.css('.background'));
    expect(loadingTemplate).toBeTruthy();
  });

  it('should display error image when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();

    const errorImage = debugElement.query(By.css('img[src="assets/images/error.png"]'));
    expect(errorImage).toBeTruthy();
  });
});
