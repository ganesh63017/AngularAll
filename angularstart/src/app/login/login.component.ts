import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl ,Validators,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[0-9]+$')])
  })

  displayValue: number = 0;
  dis = true;
  show = 'y';
  userData = [
    {
      name: 'ganesh',
      email: 'ganeshchilakala11@gmail.com',
    },
    {
      name: 'vishal',
      email: 'vishal@gmail.com',
    },
    {
      name: 'pavan',
      email: 'pavan@gmail.com',
    },
  ];

  formData: any = {};

  getFormData(){
    console.log(this.loginForm.value)
  }

  increase() {
    this.displayValue += 1;
    this.dis = !this.dis;
  }

  decrease() {
    this.displayValue -= 1;
  }

  submit(data: NgForm) {
    console.log(data);
    this.formData = data;
  }


}
