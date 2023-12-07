import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaPopupComponent } from './components/media-popup/media-popup.component';
import { LevelComponent } from './pages/level/level.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { QuestionComponent } from './pages/question/question.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { MediaComponent } from './pages/media/media.component';
import { ResponseComponent } from './pages/response/response.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { BackgroundTemplateComponent } from './components/background-template/background-template.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaPopupComponent,
    LevelComponent,
    SidebarComponent,
    NavButtonComponent,
    QuestionComponent,
    SubjectComponent,
    MediaComponent,
    ResponseComponent,
    StudentComponent,
    TeacherComponent,
    QuizComponent,
    HomeComponent,
    BackgroundTemplateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
