import { TestBed } from '@angular/core/testing';

import { InterestedPersonsService } from './interested-persons.service';

describe('InterestedPersonsService', () => {
  let service: InterestedPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestedPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
