import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, filter, mapTo } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private appService: AppService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

        return of(this.appService.getToken()).pipe(

            tap(val => {
                if(!val){
                    this.router.navigate(['/', 'login'])
                }
            }),
            filter(v=>!!v),
            mapTo(true)
        )

    }
}
