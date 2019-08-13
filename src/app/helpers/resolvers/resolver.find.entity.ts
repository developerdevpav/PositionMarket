import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EntityFindResolver implements Resolve<any> {
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('route', route);
        console.log('state', state);
        return of(1);
    }

}