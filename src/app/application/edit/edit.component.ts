import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { rankExtension } from 'src/app/shared/interfaces/interfaces';
import { ExtensionsService } from 'src/app/shared/services/extensions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  //Variables
  public extensions: rankExtension[];
  public editForm: FormGroup;
  public checkedFav: boolean = false;

  //Constructor
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private extensionsService: ExtensionsService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  //Build form function & add validators
  buildForm() {
    this.editForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required]),
      downloads: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
    });
  }

  //Detect is checkbox is changed
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.checkedFav = true;
    }
  }

  //If no validation errors add data to service array
  //Else show errors
  saveForm() {
    if (this.editForm.valid) {
      const newExtension: rankExtension = {} as rankExtension;
      newExtension.extName = this.editForm.get('name').value;
      newExtension.extAuthor = this.editForm.get('author').value;
      newExtension.extDescription = this.editForm.get('description').value;
      newExtension.extDownloads = this.editForm.get('downloads').value;
      newExtension.extRating = this.editForm.get('rating').value;
      newExtension.extImg = '../images/default_extImage.png';
      newExtension.extEmail = this.editForm.get('email').value;
      newExtension.extFav = this.checkedFav;

      this.extensionsService.addNewExtension(newExtension).subscribe(() => {
        this.router.navigate(['/list']);
      });

      /*this.extensionsService.addNewExtension(newExtension);
      this.router.navigate(['/list']);*/
    } else {
      //Show errors
      this.editForm.controls['name'].markAsTouched();
      this.editForm.get('author').markAsTouched();
      this.editForm.get('description').markAsTouched();
      this.editForm.get('downloads').markAsTouched();
      this.editForm.get('rating').markAsTouched();
      this.editForm.get('email').markAsTouched();
    }
  }
}
