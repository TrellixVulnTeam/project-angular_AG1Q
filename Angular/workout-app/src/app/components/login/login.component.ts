import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService ) {
    this.loginForm = this.formBuilder.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['',[Validators.minLength(6), Validators.required]]
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){

    let obj = {email: this.loginForm.value.email, password: this.loginForm.value.password}

    this.loginService.postUser(obj)
    .subscribe(data => console.log(data))

    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
