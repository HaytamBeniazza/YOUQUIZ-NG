import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit{
  mediaData: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getMediaElemets().subscribe(
        (data: any) => {
          this.mediaData = data.content;
        },
        error => {
          console.error("error:", error);
        }
      );
  }
}
