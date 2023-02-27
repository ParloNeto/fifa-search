import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutSearchComponent } from './fut-search.component';

describe('FutSearchComponent', () => {
  let component: FutSearchComponent;
  let fixture: ComponentFixture<FutSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
