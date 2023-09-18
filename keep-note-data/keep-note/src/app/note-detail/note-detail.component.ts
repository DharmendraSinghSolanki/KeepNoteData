import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NoteService} from '../services/note.service';
import { RouteService } from '../services/route.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouteService) { }
notes:any;
  note: Note = {title:"",
    content:"" };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe(data => {
        this.note = data;
      })
    });
  }

  editNote() {
    this.noteService.editNote(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.routeService.toHome();
    })
  }
  delete() {
    this.noteService.deleteNote(this.note.id).subscribe(data => {
      this.routeService.toHome(); //code to navigate to home      
  });
  }

}
