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

  cols: any[] = [];

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
        customer: 'Mr.E',
        status: 'เสร็จสิ้น',
        number: 6,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.F',
        status: 'เสร็จสิ้น',
        number: 9,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.G',
        status: 'เสร็จสิ้น',
        number: 5,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.H',
        status: 'รับเข้าระบบ',
        number: 12,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.I',
        status: 'รับเข้าระบบ',
        number: 15,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.J',
        status: 'รับเข้าระบบ',
        number: 9,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.K',
        status: 'รับเข้าระบบ',
        number: 15,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.L',
        status: 'รับเข้าระบบ',
        number: 25,
      },
      {
        date: currentDate.toDateString(),
        customer: 'Mr.M',
        status: 'รับเข้าระบบ',
        number: 5,
      },
    ];
    this.cols = [
      { field: 'date', header: 'วันที่' },
      { field: 'customer', header: 'ลูกค้า' },
      { field: 'status', header: 'สถานะ' },
      { field: 'number', header: 'จำนวน' },
    ]
  }
}
