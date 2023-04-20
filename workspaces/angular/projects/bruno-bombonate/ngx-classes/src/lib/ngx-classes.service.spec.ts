import { TestBed } from '@angular/core/testing';

import { NgxClassesService } from './ngx-classes.service';

describe('NgxClassesService', () => {
  let service: NgxClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
