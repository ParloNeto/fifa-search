import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NationService } from './nation.service';
import { Nation } from '../models/nation';
import { environment } from 'src/environments/environment.development';

describe('NationService', () => {
  let nationService: NationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NationService],
    });
    nationService = TestBed.inject(NationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(nationService).toBeTruthy();
  });

  it('should retrieve all nations', () => {
    const mockNations: Nation[] = [
      { nation: 'England', nationUrl: 'https://example.com/england' },
      { nation: 'Brazil', nationUrl: 'https://example.com/brazil' },
    ];

    nationService.getAllNations().subscribe((nations) => {
      expect(nations).toEqual(mockNations);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/nations`);
    expect(req.request.method).toBe('GET');
    req.flush(mockNations);
  });

  it('should retrieve a specific nation', () => {
    const nationName = 'Germany';
    const mockNation: Nation = { nation: nationName, nationUrl: 'https://example.com/germany' };

    nationService.getSpecificNation(nationName).subscribe((nation) => {
      expect(nation).toEqual(mockNation);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/${nationName}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockNation);
  });
});
