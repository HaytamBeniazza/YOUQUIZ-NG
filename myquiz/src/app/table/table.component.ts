import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() levelData: any[] = [];
  @Output() deleteLevel: EventEmitter<number> = new EventEmitter<number>();


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      console.log(this.levelData)
  }


  onDelete(id: number): void {
    // Emit the ID of the level to be deleted
    this.deleteLevel.emit(id);
  }
  
}
