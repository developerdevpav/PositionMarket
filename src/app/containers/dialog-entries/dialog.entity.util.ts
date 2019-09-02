import {Action, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

export const dispatchAfterClosed =
  (type: string) => (store: Store<any>, route: ActivatedRoute, router: Router) => (createAction: Action, editAction: Action) => {
    switch (type) {
      case 'create': {
        store.dispatch(createAction);
        break;
      }
      case 'edit': {
        store.dispatch(editAction);
        break;
      }
    }
    const urlBack = type === 'create' ? '../' : '../../';
    router.navigate([urlBack], {relativeTo: route});
  };
