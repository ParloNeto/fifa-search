import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { FutHeaderComponent } from 'src/app/shared/components/fut-header/fut-header.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DescriptionPlayerComponent } from './components/description-player/description-player.component';
import { InformationButtonsComponent } from './components/information-buttons/information-buttons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { cardMock } from 'src/app/core/models/test/mock-models';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule, DetailsComponent, FutHeaderComponent, CardDetailsComponent, DescriptionPlayerComponent, InformationButtonsComponent]
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

  it('should set loading correctly', () => {
    const event = true;
    component.getInfoLoading(event);
    expect(component.loading).toBe(event);
  });

  it('should set id correctly', () => {
    const eventId = '1111';
    component.getId(eventId);
    expect(component.id).toBe(eventId);
  })

  it('should set description correctly', () => {
    const event = cardMock;

    component.getDescriptionCard(event);
    expect(component.description.nickName).toBe(event.nickName);
    expect(component.description.firstName).toBe(event.firstName);
    expect(component.description.lastName).toBe(event.lastName);
    expect(component.description.nationality).toBe(event.nationality);
    expect(component.description.clubName).toBe(event.club.name);
  });
});
