import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.scss']
})
export class EditLevelComponent implements OnInit{
  levelId!: number;
  editLevelForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.editLevelForm = this.fb.group({
      description: ['', Validators.required],
      minPoints: ['', Validators.required],
      maxPoints: ['', Validators.required],
      // Add more form controls as needed for the level
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.levelId = +params['id'];
      this.initiateEdit();
    });
  }

  initiateEdit() {
    this.apiService.getLevelById(this.levelId).subscribe(
      (selectedLevel: any) => {
        this.editLevelForm.patchValue({
          description: selectedLevel.description,
          minPoints: selectedLevel.minPoints,
          maxPoints: selectedLevel.maxPoints,
          // Patch other form controls with selected level properties
        });
      },
      error => {
        console.error('Error fetching level for editing:', error);
      }
    );
  }

  cancelEdit() {
    // this.selectedLevelId = null;
    this.editLevelForm.reset();
  }

  editLevel() {
    if (this.editLevelForm.valid) {
      console.log("here");
      const updatedLevel = this.editLevelForm.value;

      this.apiService.editLevel(this.levelId, updatedLevel).subscribe(
        (editedLevel: any) => {
          console.log('Level edited successfully:', editedLevel);
          // Navigate back to the levels page or handle as needed
        },
        error => {
          console.error('Error editing level:', error);
        }
      );
    }
  }

}
