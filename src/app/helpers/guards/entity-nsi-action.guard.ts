import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {isExistInEnum, isUUID} from '../util/guard.util';
import {EntityNsiActionEnum} from 'src/app/containers/dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';

@Injectable({
  providedIn: 'root'
})
export class EntityNsiActionGuard implements CanActivate, CanActivateChild {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const idEntity = route.paramMap.get('id');
    const action = route.paramMap.get('action');

    return isUUID(idEntity) && isExistInEnum(EntityNsiActionEnum, action);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

}
