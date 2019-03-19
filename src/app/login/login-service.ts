import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient){

    }

    login(login: string, password: string){
        return this.http.post('https://iwork2tst.netia.org:8443/application/login', {login, password})
    }
}