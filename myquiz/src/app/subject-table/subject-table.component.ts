import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {
  @Input() subjectData: any[] = [];

  ngOnInit(): void {
      console.log(this.subjectData)
  }
}
