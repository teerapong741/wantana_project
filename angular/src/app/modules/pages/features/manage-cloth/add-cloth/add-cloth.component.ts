import { AddClothOptionComponent } from './../../../../../modules/components/add-cloth-option/add-cloth-option.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

export interface ClothOption {
  cloth_type: string;
  type_used_cloth: string;
  special_type?: string;
  damaged_cloth?: DamagedCloth;
  number: number;
}

export interface DamagedCloth {
  broken: boolean;
  burn: boolean;
  buttons_fall_off: boolean;
  fall_color: boolean;
  wrinkles: boolean;
  flaky: boolean;
  broken_zipper: boolean;
  stain: boolean;
}

@Component({
  selector: 'app-add-cloth',
  templateUrl: './add-cloth.component.html',
  styleUrls: ['./add-cloth.component.scss'],
  providers: [DialogService],
})
export class AddClothComponent implements OnInit {
  loading: boolean = false;
  editMode: boolean = false;

  orderId: string = '';
  customerName: string = '';
  phoneNumber: string = '';
  address: string = '';
  lineId: string = '';
  employeeId: string = '';

  clothList: ClothOption[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.loading = true;
    console.log({
      orderId: this.orderId,
      customerName: this.customerName,
      phoneNumber: this.phoneNumber,
      address: this.address,
      lineId: this.lineId,
      employeeId: this.employeeId,
      clothList: this.clothList,
    });
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['./../cloth-list'], { relativeTo: this.route });
    }, 1000);
  }

  onAddClothOption(): void {
    const ref = this.dialogService.open(AddClothOptionComponent, {
      header: 'เพิ่มรายการใหม่',
      width: '70%',
      baseZIndex: 99,
      closeOnEscape: true,
      dismissableMask: true,
    });

    ref.onClose.subscribe((result) => {
      if (result) {
        console.log(result);
        this.clothList.push(result);
      }
    });
  }

  onEditClothOption(index: number): void {
    const ref = this.dialogService.open(AddClothOptionComponent, {
      header: 'แก้ไขรายการ',
      width: '70%',
      baseZIndex: 99,
      closable: false,
      closeOnEscape: false,
      dismissableMask: false,
      data: this.clothList[index],
    });

    ref.onClose.subscribe((result) => {
      if (result) {
        console.log(result);
        this.clothList.push(result);
      }
    });
  }

  onDeleteClothList(index: number): void {
    this.clothList.splice(index, 1);
  }
}
