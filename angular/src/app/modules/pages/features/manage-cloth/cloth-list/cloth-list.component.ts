import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface cloth {
  date: string;
  orderid: string;
  customer: string;
  status: string;
  employee: string;
}


@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.scss'],
})
export class ClothListComponent implements OnInit {
  clothes: cloth[] = [];
  cols: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.clothes = [
      {
        date: '01-09-2564',
        orderid: 'P001',
        customer: 'Wuxia',
        status: 'In process',
        employee: 'กวางโจว',
      },
      {
        date: '03-09-2564',
        orderid: 'P002',
        customer: 'KK',
        status: 'In process',
        employee: 'ออมนี่',
      },
      {
        date: '01-12-2564',
        orderid: 'P003',
        customer: 'Squirel',
        status: 'In process',
        employee: 'unknown',
      },
    ];
    this.cols = [
      { field: 'date', header: 'วันที่รับ' },
      { field: 'orderid', header: 'รหัสรับผ้าเข้า' },
      { field: 'customer', header: 'ลูกค้า' },
      { field: 'status', header: 'สถานะ' },
      { field: 'employee', header: 'ผู้รับงาน' },
    ];
  }
}
