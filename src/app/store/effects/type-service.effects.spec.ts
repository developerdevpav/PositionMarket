import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TypeServiceEffects } from './type-service.effects';

describe('TypeServiceEffects', () => {
  let actions$: Observable<any>;
  let effects: TypeServiceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TypeServiceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TypeServiceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
