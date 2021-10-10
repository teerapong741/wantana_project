import { Component, OnInit } from '@angular/core';
import {
  CreateCustomerInput,
  CustomerService,
} from 'src/app/shared/services/customer.service';
export interface Customer {
  id: number;
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
  //ตัวแปรในshowInfoDialogดึงdbแสดงค่าในฟอร์ม
  firstName:string='';
  idCard:number = 0;
  lastName:string='';
  address:string='';
  tel:number=0;
  email:string='';
  idLine:number=0;

  //ตัวแปรอาร์เรย์
  customerList: Customer[] = [];
  cols: any[] = [];
  //ตัวแปร boolean
  disabled: boolean = true;
  displayBasic: boolean = false;
  showInfo: boolean = false;
 
  loading : boolean = false; //loading page
  //ฟังก์ชันดูข้อมูล
  showInfoDialog(id:number) {
    this.showInfo = true;
    this.customer(id)
    
  }
  // ฟังก์ชันเพิ่มข้อมูล
  showBasicDialog() {
    this.displayBasic = true;
  }

  constructor(private customerService: CustomerService) {}

  createCustomer() {
    const input: CreateCustomerInput = { //ตัวแปรinput
      idCard: 151222,
      firstName: 'bubbb',
      lastName: 'hi',
      address: 'bangkok',
      phoneNumber: 12121211,
      lineId: 95956,
      email: 're@mail',
      password: '123',
    };
    this.loading=true
    this.customerService.createCustomer(input).subscribe((result) => {
      this.loading=false
      if (!!result.data) {
        const customer = result.data.createCustomer;
      } else {
        // result.errors[0].message
      }
    });
  }

  ngOnInit(): void {
    this.customers()//ใช้งานฟังก์ชันcustomers
    
    
    this.cols = [
      { field: 'id', header: 'ลำดับ' },
      { field: 'code', header: 'รหัสลูกค้า' },
      { field: 'name', header: 'ชื่อ' },
      { field: 'lastname', header: 'นามสกุล' },
    ];
    
    
  }

  customer(id:number){
    this.loading=true
    this.customerService.customer(id).subscribe((result) => {
      this.loading=false
      if (!!result.data) {
        const customer = result.data.customer;
        this.firstName = customer.firstName
        this.idCard = customer.idCard
        this.lastName= customer.lastName
        this.address=customer.address
        this.tel=customer.phoneNumber
        this.email=customer.email
        this.idLine=customer.lineId
        console.log(customer)
        
      } else {
        // result.errors[0].message
      }
    });
  }//query ลูกค้าคนเดียว
  customers(){//ดึงค่าในdbลงตาราง
    this.loading=true
    this.customerService.customers().subscribe((result) => {
      this.loading=false
      if (!!result.data) {
        const customers = result.data.customers;
        for(let customer of customers){
          this.customerList.push({
            id:customer.id,
            code: 'C0001',
            name: customer.firstName,
            lastname: customer.lastName,
          })//ประกาศตัวแปรของfontendกับbackendให้เจอกัน
         
        }
        
      } else {
        // result.errors[0].message
      }
    });
  } //ประการฟังก์ชันcustomersแบบเรียกquery หลายคน
  
}
