import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

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
  tel:number=0;
  email:string='';
  password:string='';

   //ตัวแปรอาร์เรย์
  employeeList: Employee[] = [];
  cols: any[] = [];
   //ตัวแปร boolean
  disabled: boolean = true;
  displayBasic: boolean = false;
  showInfo: boolean = false;

  showInfoDialog(id:number) {
    this.showInfo = true;
    this.employee(id)
  }
  showBasicDialog() {
    this.displayBasic = true;
  }


  constructor(private employeeService:EmployeeService) { }

  // createEmployee() {
  //   const input: CreateEmployeeInput = { //ตัวแปรinput
  //     idCard: 12112121211,
  //     firstName: 'เคออี้',
  //     lastName: 'โจว',
  //     address: 'bangkok',
  //     phoneNumber: 28225444,
  //     lineId: 13196,
  //     email: 're@mail',
  //     password: '1234',

  //   };
  //   this.employeeService.createEmployee(input).subscribe((result) => {
      
  //     if (!!result.data) {
  //       const employee = result.data.createEmployee;
  //     } else {
  //       // result.errors[0].message
  //     }
  //   });
  // }
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
    
    this.employeeService.employee(id).subscribe((result) => {
      
      if (!!result.data) {
        const employee = result.data.employee;
        this.firstName = employee.firstName
        this.idCard = employee.idCard
        this.lastName= employee.lastName
        this.address=employee.address
        this.tel=employee.phoneNumber
        this.email=employee.email
        console.log(employee)
      } else {
        // result.errors[0].message
      }
    });
  }

  employees(){//ดึงค่าในdbลงตาราง
    
    this.employeeService.employees().subscribe((result) => {
      
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
