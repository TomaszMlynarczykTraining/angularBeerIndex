import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { subscribeOn, switchMap } from 'rxjs/operators';
import { LoginService } from './login-service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  subs=new Subscription();
  loginForm: FormGroup;


  constructor(private loginService: LoginService) { 

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    this.subs.add(    this.loginForm.valueChanges.pipe(
      switchMap(values => this.loginService.login(values.login, values.password)),
    ).subscribe(httpResponse => {
      console.log(httpResponse);
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe;
  }

}
