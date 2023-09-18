import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SearchComponent } from './search/search.component';
import { NoteComponent } from './note/note.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';import {MatDatepickerModule} from '@angular/material/datepicker';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {MatRippleModule} from '@angular/material/core';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    NoteViewComponent,
    AddNoteComponent,
    SearchComponent,
    NoteComponent,
    PageNotFoundComponent,
    NoteDetailComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule, MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRippleModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
