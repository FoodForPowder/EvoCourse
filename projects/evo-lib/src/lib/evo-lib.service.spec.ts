import { TestBed } from '@angular/core/testing';

import { EvoLibService } from './evo-lib.service';

describe('EvoLibService', () => {
  let service: EvoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
