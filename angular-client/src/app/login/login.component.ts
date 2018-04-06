import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ExpressService } from '../express.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

	angForm: FormGroup;


  constructor( private fb: FormBuilder, private service: ExpressService) { 
  	this.angForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }

  
 
    logout() {
        
    }

    onSubmit(email,password) {
 		console.log("submitted")
 		this.service.login(email, password)
	}
}
