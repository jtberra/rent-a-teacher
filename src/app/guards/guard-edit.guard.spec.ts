import { TestBed } from '@angular/core/testing';

import { GuardEditGuard } from './guard-edit.guard';

describe('GuardEditGuard', () => {
  let guard: GuardEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
