import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutAddCardComponent } from './fut-add-card-button.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('FutAddCardComponent', () => {
  let component: FutAddCardComponent;
  let fixture: ComponentFixture<FutAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutAddCardComponent ],
      imports: [ MatIconModule, RouterModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
