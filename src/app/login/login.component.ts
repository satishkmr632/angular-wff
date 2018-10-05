import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {GlobalService} from '../global.service';
import {Router} from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [RegisterService]
})
export class LoginComponent implements OnInit {
userLogin: FormGroup;
loading: boolean;

constructor(private fb: FormBuilder,
private router: Router,
private Service: RegisterService,
private global: GlobalService) {
this.userLogin = this.fb.group({
username: ['', Validators.required],
password: ['', Validators.required]
});
}

ngOnInit() {
this.loading = false;
if ( localStorage.getItem('token') && localStorage.getItem('account')) {
this.global.me = JSON.parse(localStorage.getItem('account'));
// this.router.navigate(['/login'])
}
}
onLogin() {
this.loading = true;
console.log(this.userLogin.value);
this.Service.loginUser(this.userLogin.value).subscribe(
responce => { 
this.loading = false;
localStorage.setItem('token', responce['token']);
this.global.me = responce['user'];
console.log('token', responce['token']);
// alert('User' + 'has been created');
this.router.navigate(['/home']);
},
error => {
this.loading = false;
console.log('error', error );
}
);
}

}