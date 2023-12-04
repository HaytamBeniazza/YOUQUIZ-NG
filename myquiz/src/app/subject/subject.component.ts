import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{
  subjectData: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getSubjectElements().subscribe(
        (data: any) => {
          this.subjectData = data.content;
        },
        error => {
          console.error("error:", error);
        }
      );
  }
}
