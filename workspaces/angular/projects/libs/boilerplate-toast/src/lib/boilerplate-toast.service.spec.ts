import { TestBed } from '@angular/core/testing';

import { BoilerplateToastService } from './boilerplate-toast.service';

describe('BoilerplateToastService', () => {
  let service: BoilerplateToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoilerplateToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
