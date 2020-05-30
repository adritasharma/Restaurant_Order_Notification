import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';

export const adminRoutes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: ListOrdersComponent },
        ]
    }
];

@NgModule({
    exports: [RouterModule]
})

export class AdminRoutingModule {

}
