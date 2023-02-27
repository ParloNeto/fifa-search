import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutListComponent } from './fut-list.component';

describe('FutListComponent', () => {
  let component: FutListComponent;
  let fixture: ComponentFixture<FutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
