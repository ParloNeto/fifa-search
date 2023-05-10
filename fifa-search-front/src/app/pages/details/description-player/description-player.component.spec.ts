import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPlayerComponent } from './description-player.component';

describe('InformationPlayerComponent', () => {
  let component: InformationPlayerComponent;
  let fixture: ComponentFixture<InformationPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
