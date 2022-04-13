import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onSubmit(email: string, password: string){
    console.log({email:email, password: password})
  }

  ngOnInit(): void {
  }

}
