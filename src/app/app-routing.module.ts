import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './application/detail/detail.component';
import { EditComponent } from './application/edit/edit.component';
import { ListComponent } from './application/list/list.component';
import { LoginComponent } from './application/login/login.component';
import { SessionGuard } from './shared/guards/session.guard';

const routes: Routes = [
  //va en cascada
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent, canActivate: [SessionGuard] },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [SessionGuard],
  },
  { path: 'edit/:id', component: EditComponent, canActivate: [SessionGuard] },
  //{ path: '**', redirectTo: '/login' }, //Qualquier otra ruta va a login //para loguear usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
