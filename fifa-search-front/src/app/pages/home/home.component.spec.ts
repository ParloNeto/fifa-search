import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FutListComponent } from 'src/app/shared/fut-list/fut-list.component';
import { FutAddCardComponent } from 'src/app/shared/fut-add-card/fut-add-card-button/fut-add-card-button.component';
import { FutHeaderComponent } from 'src/app/shared/fut-header/fut-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FutSearchComponent } from 'src/app/shared/fut-search/fut-search.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, FutHeaderComponent, FutAddCardComponent, FutListComponent, FutSearchComponent ],
      imports: [HttpClientModule, MatIconModule, RouterModule],
      providers: [
        {
          provide: ActivatedRoute, // Provide a mock for ActivatedRoute
          useValue: {
            snapshot: {
              // Add any properties or methods used by the HomeComponent here.
              // Example: paramMap or queryParamMap if used by HomeComponent.
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
