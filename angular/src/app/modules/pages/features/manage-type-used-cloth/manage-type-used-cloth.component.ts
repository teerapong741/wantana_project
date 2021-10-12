import { Component, OnInit } from '@angular/core';

export interface Usedtype {
  number: number;
  code: string;
  name: string;
}
@Component({
  selector: 'app-manage-type-used-cloth',
  templateUrl: './manage-type-used-cloth.component.html',
  styleUrls: ['./manage-type-used-cloth.component.scss']
})
export class ManageTypeUsedClothComponent implements OnInit {
  usedtypeList: Usedtype[] = [];
  cols: any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.usedtypeList = [
      {
        number: 1,
        code: 'U001',
        name: 'เสื้อแขนสั้น',
      },
      {
        number: 2,
        code: 'U002',
        name: 'เสื้อแขนยาว',
      },
      {
        number: 3,
        code: 'U003',
        name: 'กางเกงขาสั้น',
      },
    ];
    this.cols = [
      { field: 'number', header: 'ลำดับ' },
      { field: 'code', header: 'รหัส' },
      { field: 'name', header: 'ชื่อประเภทการใช้งาน' },
    ];
  }

}
