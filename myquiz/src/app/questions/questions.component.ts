import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  questionData: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getQuestionElemets().subscribe(
        (data: any) => {
          this.questionData = data.content;
        console.log(this.questionData);
        },
        error => {
          console.error("error:", error);
        }
      );
  }
}
