import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  levelData: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getElements().subscribe(
        (data: any) => {
          this.levelData = data.content;
        },
        error => {
          console.error("error:", error);
        }
      );
  }


  deleteLevel(levelId: number) {
    const shouldDelete = confirm('Are you sure you want to delete this level?');

    if (shouldDelete) {
      this.apiService.deleteLevel(levelId).subscribe(
        () => {
          console.log('Level deleted successfully');
          this.apiService.getElements().subscribe(
            (data: any) => {
              this.levelData = data.content;
            },
            error => {
              console.error("error:", error);
            }
          );
        },
        error => {
          console.error('Error deleting level:', error);
        }
      );
    }
  }
}
