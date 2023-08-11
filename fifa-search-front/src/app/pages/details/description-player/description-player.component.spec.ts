import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPlayerComponent } from './description-player.component';

describe('DescriptionPlayerComponent', () => {
  let component: DescriptionPlayerComponent;
  let fixture: ComponentFixture<DescriptionPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capitalize first letter', () => {
    const result = component.capitalizeFirstLetter('dybala');
    expect(result).toBe('Dybala');
  });

});
