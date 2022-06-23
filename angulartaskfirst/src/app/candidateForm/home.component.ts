import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  regForm!: FormGroup;
  tempSkills: any = [
    'Angular',
    'React',
    'Node.JS',
    'JavaScript',
    'Flutter',
    'Java',
  ];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-z]+$')]],
      lastName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-z" "]+$')],
      ],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('email')]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      skills: this.formBuilder.array([]),
      experience: this.formBuilder.array([]),
    });
  }

  changeSkills(e: any) {
    let skillsArray = this.regForm.controls['skills'] as FormArray;
    if (e.target.checked) {
      skillsArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      skillsArray.controls.forEach((element) => {
        if (e.target.value === element.value) {
          skillsArray.removeAt(i);
        }
        i++;
      });
    }
    console.log(skillsArray.value);
  }

  get experience() {
    return this.regForm.controls['experience'] as FormArray;
  }

  addExperience() {
    console.log(this.experience.value);
    this.experience.push(
      this.formBuilder.group({
        company: ['', Validators.required],
        duration: ['', Validators.required],
        responsibility: ['', Validators.required],
      })
    );
  }

  onSubmit() {
    console.log(this.regForm.value);
  }
}
