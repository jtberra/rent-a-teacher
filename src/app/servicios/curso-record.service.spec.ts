import { TestBed } from '@angular/core/testing';

import { CursoRecordService } from './curso-record.service';

describe('CursoRecordService', () => {
  let service: CursoRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
