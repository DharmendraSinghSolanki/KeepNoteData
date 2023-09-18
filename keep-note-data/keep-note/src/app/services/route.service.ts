import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private routerService: Router) { }

  toHome() {
    this.routerService.navigate([""]);
  }
}
