import { TestBed } from '@angular/core/testing';

import { AffirmationService } from './affirmation.service';

describe('AffirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffirmationService = TestBed.get(AffirmationService);
    expect(service).toBeTruthy();
  });
});
