import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TypeEffects } from './type.effects';

describe('TypeEffects', () => {
  let actions$: Observable<any>;
  let effects: TypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
