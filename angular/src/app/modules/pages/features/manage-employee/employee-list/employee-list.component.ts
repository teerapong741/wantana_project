import { Component, OnInit } from '@angular/core';

export interface Employee {
  number: number;
  code: string;
  name: string;
  lastname: string;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];
  cols: any[] = [];
  disabled: boolean = true;
  displayBasic: boolean=false;
  showInfo: boolean=false;
  
  showInfoDialog() {
    this.showInfo = true;
}
  showBasicDialog() {
    this.displayBasic = true;
}

  constructor() { }

  ngOnInit(): void {
    this.employeeList = [
      {
        number: 1,
        code: 'E01',
        name: 'ฉีหลิง',
        lastname: 'จาง',
      },
      {
        number: 2,
        code: 'E02',
        name: 'ฮาแฮ',
        lastname: 'ยู',
      },
      {
        number: 3,
        code: 'E03',
        name: ' เฟมีลล่า',
        lastname: 'ไดเอนแพนไทร์',
      },
    ];
    this.cols = [
      { field: 'number', header: 'ลำดับ' },
      { field: 'code', header: 'รหัสพนักงาน' },
      { field: 'name', header: 'ชื่อ' },
      { field: 'lastname', header: 'นามสกุล' },
    ];
  }

}
