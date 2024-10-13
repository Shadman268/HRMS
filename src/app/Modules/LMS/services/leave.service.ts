import { Injectable } from '@angular/core';
import { FullDate } from '../models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  selectedDates: FullDate[] = []; 
  
  constructor() { }

  addDate(date: FullDate): void {
    this.selectedDates.push(date);
  }

  removeDate(index:number): void {
    this.selectedDates.splice(index,1);
  }
}
