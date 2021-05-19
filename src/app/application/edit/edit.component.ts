import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.dothings();
  }

  editForm = new FormGroup({
    extensionNameForm: new FormControl(''),
  });

  dothings() {
    //this.editForm.disable();
    this.editForm.controls['extensionNameForm'].disable();
  }
}
