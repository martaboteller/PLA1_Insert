import { Component, OnInit, Output } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces';
import { ExtensionsService } from 'src/app/shared/services/extensions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  template: '<list-component></list-component>',
})
export class ListComponent implements OnInit {
  //Preparing an array of extensions and a variable to store selected extension
  extensions: rankExtension[];
  public selectedExtension: rankExtension;
  //selectedID: number;

  //Call service when initialized
  constructor(
    private router: Router,
    private extensionsService: ExtensionsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  //Get the complete list of extensions
  loadData() {
    this.extensions = this.extensionsService.getrankedExtensions();
  }

  //Trying new routes
  goToDetails(idSelected: number) {
    this.router.navigate(['/detail/', idSelected]);
  }
}
