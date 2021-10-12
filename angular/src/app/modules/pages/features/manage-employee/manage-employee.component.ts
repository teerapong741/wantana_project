import { Component, OnInit } from '@angular/core';
import { CreateEmployeeInput, EmployeeService } from 'src/app/shared/services/employee.service';

export interface Employee {
  id: number;
  code: string;
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  //ตัวแปรในshowInfoDialogดึงdbแสดงค่าในฟอร์ม
  firstName:string='';
  idCard:number = 0;
  lastName:string='';
  address:string='';
  tel:string='';
  email:string='';
  password:string='';
  role:string='ADMIN';

   //ตัวแปรอาร์เรย์
  employeeList: Employee[] = [];
  cols: any[] = [];
  roles: any[]= [{name: 'Admin', code: 'ADMIN'},{name: 'Sub_Admin', code: 'SUB_ADMIN'}]
   //ตัวแปร boolean
  disabled: boolean = true;
  displayBasic: boolean = false;
  showInfo: boolean = false;
  loading : boolean = false; //loading page

  resetData(){
    this.idCard = 0;
    this.firstName = '';
    this.lastName='';
    this.address='';
    this.tel='';
    this.email='';
    this.password='';
    this.role='ADMIN';
    
  }

  showInfoDialog(id:number) {
    this.showInfo = true;
    this.employee(id)
  }
  showBasicDialog() {
    this.displayBasic = true;
    this.resetData()
  }


  constructor(private employeeService:EmployeeService) {}

  createEmployee() {
    const input: CreateEmployeeInput = { //ตัวแปรinput
      idCard: Number(this.idCard),
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber: this.tel,
      email: this.email,
      password: this.password,
      role: this.role

    };
    this.employeeService.createEmployee(input).subscribe((result) => {
      
      if (!!result.data) {
        const employee = result.data.createEmployee;
        window.location.reload()
      } else {
        // result.errors[0].message
      }
    });
  }
  ngOnInit(): void {
    this.employees()
    this.cols = [
      { field: 'id', header: 'ลำดับ' },
      { field: 'code', header: 'รหัสพนักงาน' },
      { field: 'name', header: 'ชื่อ' },
      { field: 'lastname', header: 'นามสกุล' },
    ];
  }
  employee(id:number){
    this.loading=true
    this.employeeService.employee(id).subscribe((result) => {
      this.loading=false
      if (!!result.data) {
        const employee = result.data.employee;
        this.firstName = employee.firstName
        this.idCard = employee.idCard
        this.lastName= employee.lastName
        this.address=employee.address
        this.tel=employee.phoneNumber
        this.email=employee.email
        this.role=employee.role
        this.password=employee.password
        console.log(employee)
      } else {
        // result.errors[0].message
      }
    });
  }

  employees(){//ดึงค่าในdbลงตาราง
    this.loading=true
    this.employeeService.employees().subscribe((result) => {
      this.loading=false
      if (!!result.data) {
        const employees = result.data.employees;
        for(let employee of employees){
          this.employeeList.push({
            id:employee.id,
            code: 'E0001',
            name: employee.firstName,
            lastname: employee.lastName,
          })//ประกาศตัวแปรของfontendกับbackendให้เจอกัน
         
        }
        
      } else {
        // result.errors[0].message
      }
    });
  } //ประการฟังก์ชันemployeesแบบเรียกquery หลายคน
}
