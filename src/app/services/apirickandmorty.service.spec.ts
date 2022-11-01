import { TestBed } from '@angular/core/testing';

import { APIrickandmortyService } from './apirickandmorty.service';

describe('APIrickandmortyService', () => {
  let service: APIrickandmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIrickandmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
