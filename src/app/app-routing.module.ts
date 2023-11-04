import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.modules').then(m => m.PagesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
