import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  @ViewChild('f') signupForm!:NgForm;
  defaultQuestion = 'teacher';
  answer='';
  genders = ['male','female'];
  user = {
    username : '',
    email : '',
    secretQusetion : '',
    answer : '',
    gender : ''
  }
  summitted = false;
  suggestUsername(){
    const suggestedName = 'Superuser';
    this.signupForm?.setValue({
      userData: {
        username : suggestedName,
        email : ''
      },
      secret : 'pet',
      questionAnswer : '',
      gender : 'male'
    })
    // this.signupForm?.form.patchValue({
    //   userData:{
    //     username : suggestedName
    //   }
    // })
  }
  // onSubmit(){
  //   console.log(this.signupForm);
  // }
  onSubmit(){
    this.summitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQusetion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}