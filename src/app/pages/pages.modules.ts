import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HomeComponent } from './modulos/home/home.component';
import { ComponentsModule } from '../components/components.modules';
import { PrimeNGModules } from '../core/modules/primeng.module';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ],
    },
    {
        path: 'login',
        component: AutenticacaoComponent,
        loadChildren: () =>
            import('./autenticacao/autenticacao.module').then(
                (m) => m.AutenticacaoModule
            ),
    },

];

@NgModule({
    declarations: [HomeComponent],
    providers: [ConfirmationService, MessageService],
    imports: [
        DropdownModule, ButtonModule,PanelModule,DividerModule,
        InputTextModule,
        PrimeNGModules,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ]
})
export class PagesModule { }
