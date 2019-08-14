import { TestBed, async, inject } from '@angular/core/testing';

import { EntityNsiActionGuard } from './entity-nsi-action.guard';

describe('EntityNsiActionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityNsiActionGuard]
    });
  });

  it('should ...', inject([EntityNsiActionGuard], (guard: EntityNsiActionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
