import { TestBed } from '@angular/core/testing';

import { CoinOperationsService } from './coin-operations.service';

describe('CoinOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinOperationsService = TestBed.get(CoinOperationsService);
    expect(service).toBeTruthy();
  });
});
