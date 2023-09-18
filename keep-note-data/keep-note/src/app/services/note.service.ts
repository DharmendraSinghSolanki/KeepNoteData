import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from '../models/note'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  URL: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }
  addNote(note: Note) {
    return this.http.post<Note>(this.URL,note);
  }
  getNote(id?: number) : Observable<Note> {
    return this.http.get<Note>(`${this.URL}/${id}`);
  }

  editNote(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.URL}/${id}`,note);
  }
  deleteNote(id?: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
