import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  // private rg:FormBuilder = new FormBuilder();
  // Lo mismo de abajo, se inyecta
  myForm:FormGroup; 
  constructor(private rg:FormBuilder) { 
    this.myForm=this.rg.group({
      name:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required]],
      telefono:["",[]],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]

    })
  }
  registro(){
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
