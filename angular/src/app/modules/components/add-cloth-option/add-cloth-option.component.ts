import {
  ClothOption,
  DamagedCloth,
} from './../../pages/features/manage-cloth/add-cloth/add-cloth.component';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-cloth-option',
  templateUrl: './add-cloth-option.component.html',
  styleUrls: ['./add-cloth-option.component.scss'],
})
export class AddClothOptionComponent implements OnInit {
  addMode: boolean = true;
  clothOption: ClothOption = {
    cloth_type: '',
    type_used_cloth: '',
    special_type: '',
    damaged_cloth: {
      broken: false,
      burn: false,
      buttons_fall_off: false,
      fall_color: false,
      wrinkles: false,
      flaky: false,
      broken_zipper: false,
      stain: false,
    },
    number: 1,
  };

  damagedCloth: any[] = [];

  clothTypeOptions: any[] = [];
  typeUsedClothOptions: any[] = [];
  specialTypeOptions: any[] = [];
  damagedClothOptions: any[] = [];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    // this.clothTypeOptions = [
    //   { label: 'ผ้าบาง', value: 'slim' },
    //   { label: 'ผ้าหนา', value: 'thick' },
    //   { label: 'ผ้าพิเศษ', value: 'special' },
    // ];
    // this.specialTypeOptions = [
    //   { label: 'ขนสัตว์', value: 'wool' },
    //   { label: 'ผ้าไหม', value: 'silk' },
    //   { label: 'ผ้าลูกไม้', value: 'lace_fabric' },
    //   { label: 'ตุ๊กตา', value: 'doll' },
    //   { label: 'ยีนส์', value: 'jeans' },
    //   { label: 'กำมะหยี่', value: 'velvet' },
    //   { label: 'ผ้านวม', value: 'duvet' },
    //   { label: 'รองเท้า', value: 'shoe' },
    //   { label: 'กระเป๋า', value: 'bag' },
    //   { label: 'ผ้าปูที่นอน', value: 'bed_sheet' },
    // ];
    // this.typeUsedClothOptions = [
    //   { label: 'เสื้อแขนสั้น', value: 'short_sleeve_shirt' },
    //   { label: 'กางเกงขาสั้น', value: 'shorts' },
    //   { label: 'กระโปรงสั้น', value: 'short_skirt' },
    //   { label: 'ชุดกระโปรง', value: 'dress' },
    //   { label: 'เสื้อแขนยาว', value: 'long_sleeved_shirt' },
    //   { label: 'กางเกงขายาว', value: 'trousers' },
    //   { label: 'กระโปรงยาว', value: 'long_skirt' },
    // ];
    // this.damagedClothOptions = [
    //   { label: 'ขาด', value: 'broken' },
    //   { label: 'รอยไหม้', value: 'burn' },
    //   { label: 'กระดุมหลุด', value: 'buttons_fall_off' },
    //   { label: 'สีตก', value: 'fall_color' },
    //   { label: 'รอยยับ', value: 'wrinkles' },
    //   { label: 'เป็นขุย', value: 'flaky' },
    //   { label: 'ซิปแตก', value: 'broken_zipper' },
    //   { label: 'เปื้อน', value: 'stain' },
    // ];

    if (!!config.data) {
      this.clothOption = config.data;
      this.addMode = false;

      const damagedCloth = this.clothOption.damaged_cloth;
      if (damagedCloth?.broken === true) {
        this.damagedCloth.push('ขาด');
      }
      if (damagedCloth?.burn === true) {
        this.damagedCloth.push('รอยไหม้');
      }
      if (damagedCloth?.buttons_fall_off === true) {
        this.damagedCloth.push('กระดุมหลุด');
      }
      if (damagedCloth?.fall_color === true) {
        this.damagedCloth.push('สีตก');
      }
      if (damagedCloth?.wrinkles === true) {
        this.damagedCloth.push('รอยยับ');
      }
      if (damagedCloth?.flaky === true) {
        this.damagedCloth.push('เป็นขุย');
      }
      if (damagedCloth?.broken_zipper === true) {
        this.damagedCloth.push('ซิปแตก');
      }
      if (damagedCloth?.stain === true) {
        this.damagedCloth.push('เปื้อน');
      }
    }

    this.clothTypeOptions = [
      { label: 'ผ้าบาง', value: 'ผ้าบาง' },
      { label: 'ผ้าหนา', value: 'ผ้าหนา' },
      { label: 'ผ้าพิเศษ', value: 'ผ้าพิเศษ' },
    ];
    this.specialTypeOptions = [
      { label: 'ขนสัตว์', value: 'ขนสัตว์' },
      { label: 'ผ้าไหม', value: 'ผ้าไหม' },
      { label: 'ผ้าลูกไม้', value: 'ผ้าลูกไม้' },
      { label: 'ตุ๊กตา', value: 'ตุ๊กตา' },
      { label: 'ยีนส์', value: 'ยีนส์' },
      { label: 'กำมะหยี่', value: 'กำมะหยี่' },
      { label: 'ผ้านวม', value: 'ผ้านวม' },
      { label: 'รองเท้า', value: 'รองเท้า' },
      { label: 'กระเป๋า', value: 'กระเป๋า' },
      { label: 'ผ้าปูที่นอน', value: 'ผ้าปูที่นอน' },
    ];
    this.typeUsedClothOptions = [
      { label: 'เสื้อแขนสั้น', value: 'เสื้อแขนสั้น' },
      { label: 'กางเกงขาสั้น', value: 'กางเกงขาสั้น' },
      { label: 'กระโปรงสั้น', value: 'กระโปรงสั้น' },
      { label: 'ชุดกระโปรง', value: 'ชุดกระโปรง' },
      { label: 'เสื้อแขนยาว', value: 'เสื้อแขนยาว' },
      { label: 'กางเกงขายาว', value: 'กางเกงขายาว' },
      { label: 'กระโปรงยาว', value: 'กระโปรงยาว' },
    ];
    this.damagedClothOptions = [
      { label: 'ขาด', value: 'ขาด' },
      { label: 'รอยไหม้', value: 'รอยไหม้' },
      { label: 'กระดุมหลุด', value: 'กระดุมหลุด' },
      { label: 'สีตก', value: 'สีตก' },
      { label: 'รอยยับ', value: 'รอยยับ' },
      { label: 'เป็นขุย', value: 'เป็นขุย' },
      { label: 'ซิปแตก', value: 'ซิปแตก' },
      { label: 'เปื้อน', value: 'เปื้อน' },
    ];
  }

  ngOnInit(): void {}

  onChangeDamaged(value: any): void {
    this.clothOption.damaged_cloth = {
      broken: false,
      burn: false,
      buttons_fall_off: false,
      fall_color: false,
      wrinkles: false,
      flaky: false,
      broken_zipper: false,
      stain: false,
    };
    value.map((v: any) => {
      if (v === 'ขาด') {
        this.clothOption.damaged_cloth!.broken = true;
      }
      if (v === 'รอยไหม้') {
        this.clothOption.damaged_cloth!.burn = true;
      }
      if (v === 'กระดุมหลุด') {
        this.clothOption.damaged_cloth!.buttons_fall_off = true;
      }
      if (v === 'สีตก') {
        this.clothOption.damaged_cloth!.fall_color = true;
      }
      if (v === 'รอยยับ') {
        this.clothOption.damaged_cloth!.wrinkles = true;
      }
      if (v === 'เป็นขุย') {
        this.clothOption.damaged_cloth!.flaky = true;
      }
      if (v === 'ซิปแตก') {
        this.clothOption.damaged_cloth!.broken_zipper = true;
      }
      if (v === 'เปื้อน') {
        this.clothOption.damaged_cloth!.stain = true;
      }
    });
  }

  onSubmit(): void {
    if (this.addMode) {
      this.ref.close(this.clothOption);
    } else {
      this.ref.close();
    }
  }

  onCancel(): void {
    this.ref.close();
  }
}
