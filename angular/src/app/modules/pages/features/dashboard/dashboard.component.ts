import { Component, OnInit } from '@angular/core';

export interface ClothToDay {
  date: string;
  customer: string;
  status: string;
  number: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  clothsToDay: ClothToDay[] = [];

  constructor() {}

  ngOnInit(): void {
    const currentDate = new Date();
    this.clothsToDay = [
      {
        date: currentDate.toDateString(),
        customer: 'Mr.A',
        status: 'กำลังซัก',
        number: 30,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.B',
        status: 'รอซัก',
        number: 2,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.C',
        status: 'กำลังอบแห้ง',
        number: 15,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.D',
        status: 'เสร็จสิ้น',
        number: 5,
      },
    ];
  }
}
