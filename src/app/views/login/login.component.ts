import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService){}
  
  ngOnInit() {
      
    this.formLogin = this.formBuilder.group({
       username: [null, Validators.required],
       password: [null,Validators.required]
    });
  } 


  login(){
    const username = this.formLogin.get('username').value;
    const password = this.formLogin.get('password').value;
    this.authService
        .authenticate(username,password)
        .subscribe(
          () => console.log('autenticado'),
          err =>{
                console.log(err);
                this.resetForm();
          }  
        );
  }


    aplicaErro(nome){
      
    }
    resetForm(){
      this.formLogin.reset();
    }
 }
