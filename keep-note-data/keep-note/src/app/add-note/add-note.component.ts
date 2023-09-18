import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import {Note} from '../models/note';
import {Notes} from '../models/notes';
import {NoteService} from '../services/note.service'
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Note = {};
  
  @Output()
  noteAdded:EventEmitter<Note> = new EventEmitter<Note>();
 
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
addNote(){
  if (this.note.title)
  this.noteService.addNote(this.note).subscribe({
    next: data => {
      this.noteAdded.emit(this.note);
      this.note = {};
    },
    error: e => {
      alert("Failed to Add note due to Network Error !! Please Try Again Later");
    }
  });
}
// flag:boolean=false;
// public show(){
//   if(this.flag==false){
//     this.flag=true;
//   }else{
//     this.flag=false;
//   }
// }
}
