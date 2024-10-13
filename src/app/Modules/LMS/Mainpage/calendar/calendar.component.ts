import { Component, OnInit } from '@angular/core';
import { Day, Month } from '../../models/calendar.model';
import { LeaveService } from '../../services/leave.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplyleaveComponent } from '../applyleave/applyleave.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  currentYear: number;
  months: Month[] = [];
  dayNames: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  fakeTiles: any;
  
  constructor(public leaveService: LeaveService, public dialog: MatDialog) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.generateCalendar(this.currentYear);
  }

  applyLeave(): void {
    console.log('apply')
    this.dialog.open(ApplyleaveComponent, {
      width: '400px',
      data: {
        message: "apply"
      }
    }
    )
  }

  generateCalendar(year: number): void {
    this.months = this.monthNames.map((month, index) => ({
      name: month,
      days: this.getDaysInMonth(index, year)
    }));
  }

  getDaysInMonth(month: number, year: number): any {
    const date = new Date(year, month, 1);
    console.log('date', date)
    const days: Day[] = [];
    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    while (date.getMonth() === month) {
      days.push({
        date: date.getDate(),
        dayName: dayNames[date.getDay()]
      });
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  getNoOfFakeTiles(year: number, month: Month): number{
    const monthNumber = this.getMonthNumber(month);
    const firstDayOfMonth = new Date(year, monthNumber, 1).getDay();
    return firstDayOfMonth;
  }

  getMonthNumber(month: Month): number {
    return this.monthNames.findIndex(m => m === month.name);
  }

  changeYear(newYear: number) {
    this.currentYear = newYear;
    this.generateCalendar(this.currentYear);
  }

  toggleDateSelection(day: Day, month: Month): void {
    const datekey = { day, month };
    console.log(datekey);
    const index = this.leaveService.selectedDates.findIndex(d => d.month === month && d.day === day);

    if (index > -1) {
      this.leaveService.removeDate(index);
    } else {
      this.leaveService.addDate(datekey);
    }
  }

  isDateSelected(day: Day, month: Month): boolean {
    return this.leaveService.selectedDates.some(d => d.day === day && d.month === month );
  }
}
