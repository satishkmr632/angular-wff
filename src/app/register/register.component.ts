import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

register;
constructor(private registerService: RegisterService,
private router: Router) {}

ngOnInit() {
this.register = {
username: '',
password1: '',
password2: '',
email: '',
};
}
registerUser() {
this.registerService.registerUser(this.register).subscribe(
responce => {
this.router.navigate(['/login']);
},
error =>console.log('error', error )
);
}
}
