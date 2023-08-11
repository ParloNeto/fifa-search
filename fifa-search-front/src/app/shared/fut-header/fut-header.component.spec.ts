import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutHeaderComponent } from './fut-header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('FutHeaderComponent', () => {
  let component: FutHeaderComponent;
  let fixture: ComponentFixture<FutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutHeaderComponent ],
      imports: [ RouterModule ],
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

    fixture = TestBed.createComponent(FutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
