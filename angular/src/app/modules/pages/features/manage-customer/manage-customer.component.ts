import { Component, OnInit } from '@angular/core';
export interface Customer {
  number: number;
  code: string;
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  cols: any[] = [];
  disabled: boolean = true;
  displayBasic: boolean = false;
  showInfo: boolean = false;

  showInfoDialog() {
    this.showInfo = true;
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  constructor() { }

  ngOnInit(): void {
    this.customerList = [
      {
        number: 1,
        code: 'C01',
        name: 'ฉีหลิง',
        lastname: 'จาง',
      },
      {
        number: 2,
        code: 'C02',
        name: 'ฮาแฮ',
        lastname: 'ยู',
      },
      {
        number: 3,
        code: 'C03',
        name: ' เฟมีลล่า',
        lastname: 'ไดเอนแพนไทร์',
      },
      {
        number: 4,
        code: 'C04',
        name: 'อานา',
        lastname: 'อันเรท',
      },
    ];
    this.cols = [
      { field: 'number', header: 'ลำดับ' },
      { field: 'code', header: 'รหัสลูกค้า' },
      { field: 'name', header: 'ชื่อ' },
      { field: 'lastname', header: 'นามสกุล' },
    ];
  }

}
