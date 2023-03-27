import { TestBed } from '@angular/core/testing';

import { TypecardsService } from './typecards.service';

describe('TypecardsService', () => {
  let service: TypecardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
