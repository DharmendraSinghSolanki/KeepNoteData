import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  notetitle: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchNotes() {

    this.searchTextChanged.emit(this.notetitle);
  }

  clearSearch() {
    this.notetitle = "";
    this.searchTextChanged.emit(this.notetitle);
  }
}
