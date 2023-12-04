import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { LevelComponent } from './level/level.component';
import { MediaComponent } from './media/media.component';
import { SubjectComponent } from './subject/subject.component';
import { TableComponent } from './table/table.component';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import { AnswerTableComponent } from './answer-table/answer-table.component';
import { MediaTableComponent } from './media-table/media-table.component';
import { QuestionTableComponent } from './question-table/question-table.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { EditMediaComponent } from './edit-media/edit-media.component';
import { AddLevelComponent } from './add-level/add-level.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditLevelComponent } from './edit-level/edit-level.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
import { AddAnswerComponent } from './add-answer/add-answer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavButtonComponent,
    QuestionsComponent,
    AnswersComponent,
    LevelComponent,
    MediaComponent,
    SubjectComponent,
    TableComponent,
    SubjectTableComponent,
    AnswerTableComponent,
    MediaTableComponent,
    QuestionTableComponent,
    MediaFormComponent,
    AddMediaComponent,
    EditMediaComponent,
    AddLevelComponent,
    EditLevelComponent,
    EditAnswerComponent,
    AddAnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
