import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    private token: string;

    getToken(){
        return this.token;
    }   
}