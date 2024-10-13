export interface Day {
    date: number;
    dayName: string;
  }
  
export interface Month {
    name: string;
    days: Day[];
  }

export interface FullDate {
  day: Day;
  month: Month;
}