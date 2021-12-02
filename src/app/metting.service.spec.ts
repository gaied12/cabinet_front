import { TestBed } from '@angular/core/testing';

import { MettingService } from './metting.service';

describe('MettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MettingService = TestBed.get(MettingService);
    expect(service).toBeTruthy();
  });
});
