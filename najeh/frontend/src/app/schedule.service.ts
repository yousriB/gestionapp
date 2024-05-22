import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule: any[] = [
    { day: 'Monday', slot1: '', slot2: '', slot3: '' },
    { day: 'Tuesday', slot1: '', slot2: '', slot3: '' },
    { day: 'Wednesday', slot1: '', slot2: '', slot3: '' },
    { day: 'Thursday', slot1: '', slot2: '', slot3: '' },
    { day: 'Friday', slot1: '', slot2: '', slot3: '' },
    { day: 'Saturday', slot1: '', slot2: '', slot3: '' },
    { day: 'Sunday', slot1: '', slot2: '', slot3: '' }
  ];

  constructor() { }

  setSchedule(data: any[]) {
    this.schedule = data;
  }

  getSchedule() {
    return this.schedule;
  }
}
