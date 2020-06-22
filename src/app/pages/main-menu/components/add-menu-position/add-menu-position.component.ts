import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-menu-position',
  templateUrl: './add-menu-position.component.html',
  styleUrls: ['./add-menu-position.component.scss']
})
export class AddMenuPositionComponent implements OnInit {


  editPositionForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editPositionForm = this.fb.group({
      name: [null, [Validators.required]],
      sale: [null, [Validators.required]]
    });
  }

  toMenuList() {
    this.router.navigateByUrl('main-menu');
  }

  savePosition() {
    console.log(this.editPositionForm.value);
  }
}
