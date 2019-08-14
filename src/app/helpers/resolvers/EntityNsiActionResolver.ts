import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Nsi } from 'src/app/store/entities/abstract.entity';
import { TagEntity } from 'src/app/store/entities/tag.entity';
import { TypeEntity } from 'src/app/store/entities/type.entity';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class EntityNsiActionResolver implements Resolve<TagEntity | TypeEntity> {
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TagEntity | TypeEntity | Observable<TagEntity | TypeEntity> | Promise<TagEntity | TypeEntity> {
        throw new Error("Method not implemented.");
    }

    /*     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          const table = route.paramMap.get('table');
          const idEntity = route.paramMap.get('id');
          const action = route.paramMap.get('action');
          
          return isExistInEnum(EntityNsiTablesEnum, table) && isUUID(idEntity) && isExistInEnum(EntityNsiActionEnum, action);
        }
        
        canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          return this.canActivate(childRoute, state);
        }
         */
}
