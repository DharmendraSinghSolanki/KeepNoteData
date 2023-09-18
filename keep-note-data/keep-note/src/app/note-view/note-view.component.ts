import { Component,Input ,OnInit} from '@angular/core';
import {Note} from '../models/note';
import {Notes} from '../models/notes'
import {NoteService} from '../services/note.service'
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  @Input()
  notes: Note[] = [];
  constructor(private noteService: NoteService) {
  }
  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data => {
       
        this.notes= data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  onSearchTextChanged(notetitle: string) {
    this.noteService.getNotes().subscribe({
      next: data => {
        if(notetitle === '' || !notetitle)
      this.notes = data;
    else
    {
      this.notes =data;
    
      console.log(this.notes)
      this.notes = data.filter(note => note.title?.includes(notetitle));
    }
        // this.notes= data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }
   
  
  onNoteAdded(note:Note) {
    alert("note added");
    this.notes.push(note);
  }
}
