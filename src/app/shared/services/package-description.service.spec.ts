import { TestBed } from '@angular/core/testing';

import { PackageDescriptionService } from './package-description.service';

describe('PackageDescriptionService', () => {
  let service: PackageDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
