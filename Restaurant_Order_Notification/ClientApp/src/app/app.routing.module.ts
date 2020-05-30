import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    { path: '',  component: LoginComponent },
    {
        path: 'admin',
        loadChildren: './_modules/admin/admin.module#AdminModule',
    },
    {
        path: 'user',
        loadChildren: './_modules/user/user.module#UserModule',
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}
