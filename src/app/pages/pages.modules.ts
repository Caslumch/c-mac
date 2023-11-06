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
import { AboutComponent } from './modulos/about/about.component';
import { ContactComponent } from './modulos/contact/contact.component';
import { ProjectsComponent } from './modulos/projects/projects.component';
import { OtherController } from '../core/controllers/user/others.controller';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TechnologiesComponent } from './modulos/technologies/technologies.component';
import { OverviewComponent } from './modulos/overview/overview.component';
import { stacksComponent } from './modulos/stacks/stacks.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationModule } from '../core/modules/translation.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'stacks', component: stacksComponent },
            { path: 'tech', component: TechnologiesComponent },
            { path: 'overview', component: OverviewComponent },
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
    declarations: [HomeComponent, AboutComponent, ProjectsComponent,
        OverviewComponent,
        stacksComponent,
        TechnologiesComponent, ContactComponent],
    providers: [ConfirmationService, MessageService, OtherController],
    imports: [
        DropdownModule, ButtonModule, PanelModule, DividerModule,
        InputTextModule,
        PrimeNGModules,
        TranslationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en-US',
            loader: {
                provide: TranslateLoader,
                // useFactory: HttpLoaderFactory,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ]
})
export class PagesModule { }
