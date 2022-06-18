import { TestBed } from '@angular/core/testing';

import { AlgdsService } from './algds.service';

describe('AlgdsService', () => {
  let service: AlgdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
