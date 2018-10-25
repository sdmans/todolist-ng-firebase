import { TestBed } from '@angular/core/testing';

import { FirebaseDatabaseService } from './firebase-database.service';

describe('FirebaseDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseDatabaseService = TestBed.get(FirebaseDatabaseService);
    expect(service).toBeTruthy();
  });
});
