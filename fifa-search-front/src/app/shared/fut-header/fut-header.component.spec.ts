import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutHeaderComponent } from './fut-header.component';

describe('FutHeaderComponent', () => {
  let component: FutHeaderComponent;
  let fixture: ComponentFixture<FutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
