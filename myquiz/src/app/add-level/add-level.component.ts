import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent{
  levelData: any[] = [];
  addLevelForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router){
    this.addLevelForm = this.fb.group({
      description: ['', Validators.required],
      minPoints: ['', Validators.required],
      maxPoints: ['', Validators.required]
    
    });
  }
  // ngOnInit() {
  //   this.fetchLevels();
  // }

  // fetchLevels() {
  //   this.apiService.getElements().subscribe(
  //     (data: any) => {
  //       this.levelData = data;
  //     },
  //     error => {
  //       console.error('Error fetching levels:', error);
  //     }
  //   );
  // }

  addLevel(){
    if(this.addLevelForm.valid){
      const newLevel = this.addLevelForm.value;
      this.apiService.addLevel(newLevel).subscribe(
        (addedLevel: any) => {
          console.log('Level added successfully:', addedLevel);
          this.addLevelForm.reset();
          this.router.navigate(['/level']);
        },
        error => {
          console.error('error adding level:', error);
        }
      );
    }
  }

}
