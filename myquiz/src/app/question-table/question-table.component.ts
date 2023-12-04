import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent {
  @Input() questionData: any[] = [];

  ngOnInit(): void {
      console.log(this.questionData)
  }
}
