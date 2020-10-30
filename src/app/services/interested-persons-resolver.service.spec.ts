import { TestBed } from '@angular/core/testing';

import { InterestedPersonsResolverService } from './interested-persons-resolver.service';

describe('InterestedPersonsResolverService', () => {
  let service: InterestedPersonsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestedPersonsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
