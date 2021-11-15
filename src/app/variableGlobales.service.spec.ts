import { TestBed } from '@angular/core/testing';

import { VariableGlobalesService } from './variableGlobales.service';

describe('VariableGlobalesService', () => {
  let service: VariableGlobalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableGlobalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
