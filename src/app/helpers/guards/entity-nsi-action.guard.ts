import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { isExistInEnum, isUUID } from '../util/guard.util';
import { EntityNsiTablesEnum, EntityNsiActionEnum } from 'src/app/containers/dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';

@Injectable({
  providedIn: 'root'
})
export class EntityNsiActionGuard implements CanActivate, CanActivateChild {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const table = route.paramMap.get('table');
    const idEntity = route.paramMap.get('id');
    const action = route.paramMap.get('action');
    
    return isExistInEnum(EntityNsiTablesEnum, table) && isUUID(idEntity) && isExistInEnum(EntityNsiActionEnum, action);
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
  
}
