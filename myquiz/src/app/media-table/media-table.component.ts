import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-table',
  templateUrl: './media-table.component.html',
  styleUrls: ['./media-table.component.scss']
})
export class MediaTableComponent {
  @Input() mediaData: any[] = [];

  ngOnInit(): void {
      console.log(this.mediaData)
  }
}
