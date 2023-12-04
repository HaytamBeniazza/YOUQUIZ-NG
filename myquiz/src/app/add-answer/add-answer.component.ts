import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.scss']
})
export class AddAnswerComponent {

  answerData: any[] = [];
  addAnswerForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router){
    this.addAnswerForm = this.fb.group({
      response: ['', Validators.required],
    });
  }

  addAnswer(){
    if(this.addAnswerForm.valid){
      const newAnswer = this.addAnswerForm.value;
      console.log(newAnswer)
      this.apiService.addAnswer(newAnswer).subscribe(
        (addedAnswer: any) => {
          console.log('answer added successfully:', addedAnswer);
          this.addAnswerForm.reset();
          this.router.navigate(['/answers']);
        },
        error => {
          console.error('error adding answer:', error);
        }
      );
    }
  }

}
