import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectionColors } from './../../constants/colors.constant';
import { SectionLevel } from '@shared/models/enums/section-level.enum';

@Component({
  selector: 'app-add-menu-section',
  templateUrl: './add-menu-section.component.html',
  styleUrls: ['./add-menu-section.component.scss']
})
export class AddMenuSectionComponent implements OnInit {

  _enums = { SectionLevel: SectionLevel };
  _constants = { SectionColors };
  editSectionForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editSectionForm = this.fb.group({
      name: [null, [Validators.required]],
      section: [null, [Validators.required]],
      color: [null, [Validators.required]]
    });
  }

  saveSection() {
    console.log(this.editSectionForm.value);
  }

  toMenuList() {
    this.router.navigateByUrl('main-menu');
  }

}
