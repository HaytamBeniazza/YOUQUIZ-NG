import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LevelComponent } from './level/level.component';
import { AnswersComponent } from './answers/answers.component';
import { SubjectComponent } from './subject/subject.component';
import { MediaComponent } from './media/media.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { EditLevelComponent } from './edit-level/edit-level.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';

const routes: Routes = [
  {path: 'questions', component: QuestionsComponent},
  {path: 'level', component: LevelComponent},
  {path: 'answers', component: AnswersComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'media', component: MediaComponent},
  {path: 'editMedia', component: MediaFormComponent},
  {path: 'addMedia', component: AddMediaComponent},
  {path: 'addLevel', component: AddLevelComponent},
  {path: 'addAnswer', component: AddAnswerComponent},
  {path: 'level/edit/:id', component: EditLevelComponent}
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }