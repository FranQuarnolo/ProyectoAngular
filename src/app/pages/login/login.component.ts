import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup; 
  constructor(private rg:FormBuilder) { 
    this.formLogin=this.rg.group({
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }
  registro(){
    console.log(this.formLogin.value)
  }
  ngOnInit(): void {
  }

}
