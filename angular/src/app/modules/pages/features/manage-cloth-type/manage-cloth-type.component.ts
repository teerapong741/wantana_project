import { Component, OnInit } from '@angular/core';

export interface Type {
  number: number;
  code: string;
  name: string;
}
@Component({
  selector: 'app-manage-cloth-type',
  templateUrl: './manage-cloth-type.component.html',
  styleUrls: ['./manage-cloth-type.component.scss'],
})
export class ManageClothTypeComponent implements OnInit {
  typeList: Type[] = [];
  cols: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.typeList = [
      {
        number: 1,
        code: 'T001',
        name: 'ผ้าหนา',
      },
      {
        number: 2,
        code: 'T002',
        name: 'ผ้าบาง',
      },
      {
        number: 3,
        code: 'T003',
        name: 'ผ้าพิเศษ',
      },
    ];
    this.cols = [
      { field: 'number', header: 'ลำดับ' },
      { field: 'code', header: 'รหัส' },
      { field: 'name', header: 'ชื่อชนิดผ้า' },
    ];
  }
}
