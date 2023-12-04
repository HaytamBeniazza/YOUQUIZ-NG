import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-table',
  templateUrl: './answer-table.component.html',
  styleUrls: ['./answer-table.component.scss']
})
export class AnswerTableComponent {
  @Input() answerData: any[] = [];

  ngOnInit(): void {
      console.log(this.answerData)
  }
}
