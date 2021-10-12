import { Component, OnInit } from '@angular/core';
import {
  CreateCustomerInput,
  CustomerService,
  UpdateCustomerInput,
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
  tel:string='';
  email:string='';
  idLine:string='';
  id:string=''

  //ตัวแปรอาร์เรย์
  customerList: Customer[] = [];
  cols: any[] = [];
  //ตัวแปร boolean
  disabled: boolean = true;
  displayAdd: boolean = false;
  showInfo: boolean = false;
 
  loading : boolean = false; //loading page
  
  resetData(){
    this.idCard = 0;
    this.firstName = '';
    this.lastName='';
    this.address='';
    this.tel='';
    this.email='';
    this.idLine='';

  }
  //ฟังก์ชันดูข้อมูล
  showInfoDialog(id:number) {
    this.showInfo = true;
    this.customer(id)
    
    console.log(id)
    
  }
  // ฟังก์ชันเพิ่มข้อมูล
  showAddDialog() {
    this.displayAdd = true;
    this.resetData()

  }

  constructor(private customerService: CustomerService) {}

  createCustomer() {
    const input: CreateCustomerInput = { //ตัวแปรinput
      idCard: Number(this.idCard),
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber: this.tel,
      lineId: this.idLine,
      email: this.email,
      
    };
    
    this.loading=true
    this.customerService.createCustomer(input).subscribe((result) => {
      this.loading=false
      if (!!result.data) { //จะทำงานเมื่อข้อมูลสำเร็จ
        const customer = result.data.createCustomer;
        window.location.reload()
      } else { //จะทำงานเมื่อข้อมูลผิดพลาด
        // result.errors[0].message
      }
    });
    
  }

  updateCustomer(){
    const output: UpdateCustomerInput={
      id:Number(this.id),
      idCard: Number(this.idCard),
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber: this.tel,
      lineId: this.idLine,
      email: this.email,
    }
    this.customerService.updateCustomer(output).subscribe((result) =>{
      if (!!result.data) { //จะทำงานเมื่อข้อมูลสำเร็จ
        const customer = result.data.updateCustomer;
        window.location.reload()
      } else { //จะทำงานเมื่อข้อมูลผิดพลาด
        // result.errors[0].message
      }
    })
  }

  // removeCustomer(id:number){
  //  this.customerService.removeCustomer(id).subscribe((result)=>{
  //   if (!!result.data) { //จะทำงานเมื่อข้อมูลสำเร็จ
  //     const customer = result.data.updateCustomer;
  //     this.id=customer.id
  //       this.firstName = customer.firstName
  //       this.idCard = customer.idCard
  //       this.lastName= customer.lastName
  //       this.address=customer.address
  //       this.tel=customer.phoneNumber
  //       this.email=customer.email
  //       this.idLine=customer.lineId
  //     window.location.reload()
  //   } else { //จะทำงานเมื่อข้อมูลผิดพลาด
  //     // result.errors[0].message
  //   }
  //  })
  // }

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
        this.id=customer.id
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
            code: 'C000'+customer.id,  
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
