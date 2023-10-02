import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { AutenticacaoComponent } from "./autenticacao.component";
import { ComponentsModule } from "src/app/components/components.modules";
import { PrimeNGModules } from "src/app/core/modules/primeng.module";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: AutenticacaoComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },

];

@NgModule({
  declarations: [
    LoginComponent,
    AutenticacaoComponent

  ],
  imports: [
    DropdownModule, ButtonModule,
    InputTextModule,
    PrimeNGModules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    ComponentsModule,

  ],
})
export class AutenticacaoModule { }

