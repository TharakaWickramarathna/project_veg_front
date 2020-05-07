import { TestBed } from '@angular/core/testing';

import { UserPackDescriptionService } from './user-pack-description.service';

describe('UserPackDescriptionService', () => {
  let service: UserPackDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPackDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
