import { Component, OnInit } from '@angular/core';
import {
  CreateCustomerInput,
  CustomerService,
} from 'src/app/shared/services/customer.service';
export interface Customer {
  number: number;
  code: string;
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss'],
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

  constructor(private customerService: CustomerService) {}

  createCustomer() {
    const input: CreateCustomerInput = {
      idCard: 151222,
      firstName: 'bubbb',
      lastName: 'hi',
      address: 'bangkok',
      phoneNumber: 12121211,
      lineId: 95956,
      email: 're@mail',
      password: '123',
    };
    this.customerService.createCustomer(input).subscribe((result) => {
      if (!!result.data) {
        const customer = result.data.createCustomer;
      } else {
        // result.errors[0].message
      }
    });
  }

  ngOnInit(): void {
    this.customerList = [
      {
        number: 1,
        code: 'C0001',
        name: 'ฉีหลิง',
        lastname: 'จาง',
      },
      {
        number: 2,
        code: 'C0002',
        name: 'ฮาแฮ',
        lastname: 'ยู',
      },
      {
        number: 3,
        code: 'C0003',
        name: ' เฟมีลล่า',
        lastname: 'ไดเอนแพนไทร์',
      },
      {
        number: 4,
        code: 'C0004',
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
