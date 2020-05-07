import { TestBed } from '@angular/core/testing';

import { UserPackService } from './user-pack.service';

describe('UserPackService', () => {
  let service: UserPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
