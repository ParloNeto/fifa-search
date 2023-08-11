import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClubService } from './club.service';
import { Club } from '../models/club';
import { clubsMock, clubMock } from '../models/test/mock-models';

describe('ClubService', () => {
  let clubService: ClubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClubService],
    });
    clubService = TestBed.inject(ClubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(clubService).toBeTruthy();
  });

  it('should retrieve all clubs', () => {
    const mockClubs: Club[] = clubsMock;

    clubService.getAllClubs().subscribe((clubs) => {
      expect(clubs).toEqual(mockClubs);
    });

    const req = httpMock.expectOne('http://localhost:8080/clubs');
    expect(req.request.method).toBe('GET');
    req.flush(mockClubs);
  });

  it('should retrieve a specific club', () => {
    const mockOneClub: Club = clubMock;
    const clubId = mockOneClub.id;

    clubService.getSpecificClub(clubId).subscribe((club) => {
      expect(club).toEqual(mockOneClub);
    });

    const req = httpMock.expectOne(`http://localhost:8080/clubs/${clubId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockOneClub);
  });
});
