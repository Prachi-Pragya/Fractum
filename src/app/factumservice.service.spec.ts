import { TestBed } from '@angular/core/testing';

import { FactumserviceService } from './factumservice.service';

describe('FactumserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactumserviceService = TestBed.get(FactumserviceService);
    expect(service).toBeTruthy();
  });
});
