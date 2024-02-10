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

  it('should emit search value', () => {
    const searchValue = 'messi';
    let emittedValue: string | undefined;

    component.emmitSearch.subscribe((value) => {
      emittedValue = value;
    });

    component.search(searchValue);

    expect(emittedValue).toBe(searchValue);
  });
});
