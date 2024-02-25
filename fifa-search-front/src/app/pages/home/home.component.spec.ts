import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FutListComponent } from 'src/app/pages/home/components/fut-list/fut-list.component';
import { FutAddCardComponent } from 'src/app/shared/components/buttons/fut-add-card-button.component';
import { FutHeaderComponent } from 'src/app/shared/components/fut-header/fut-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FutSearchComponent } from 'src/app/pages/home/components/fut-search/fut-search.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterModule, FutAddCardComponent, BrowserAnimationsModule, HomeComponent, FutHeaderComponent, FutListComponent, FutSearchComponent],
    providers: [
        {
            provide: ActivatedRoute,
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
