import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit{
  answerData: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getAnswerElemets().subscribe(
        (data: any) => {
          this.answerData = data.content;
        },
        error => {
          console.error("error:", error);
        }
      );
  }
}
