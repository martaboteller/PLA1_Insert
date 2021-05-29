import { Component, OnInit, Output } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces/interfaces';
import { ExtensionsService } from 'src/app/shared/services/extensions.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    private extensionsService: ExtensionsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  //Get the complete list of extensions
  loadData() {
    this.extensions = this.extensionsService.getrankedExtensions();
  }

  //Access detail component
  goToDetails(idSelected: number) {
    this.router.navigate(['/detail/', idSelected]);
  }

  logOut() {
    if (this.authService.hasSession()) {
      //Session exists
      const goodByeName = this.authService.getUserSession().name;
      //Say Goodbye
      console.log('Goodbye ' + goodByeName);
      //Delete session info
      this.authService.closeSession();
      //Navigate to login
      this.router.navigate(['/login']);
    } else {
      console.log("Can't log out");
      this.router.navigate(['/login']);
    }
  }
}
