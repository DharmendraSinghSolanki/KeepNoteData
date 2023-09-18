import { Component } from '@angular/core';
import {Note} from '../models/note';
import {Notes} from '../models/notes';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
notes:Note[]=Notes;



}
