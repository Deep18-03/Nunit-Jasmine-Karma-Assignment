import { TestBed } from '@angular/core/testing';

import { StringSwiftService } from './string-swift.service';

describe('StringSwiftService', () => {
  let service: StringSwiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringSwiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
