import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TagEffects } from './tag.effects';

describe('TagEffects', () => {
  let actions$: Observable<any>;
  let effects: TagEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TagEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
