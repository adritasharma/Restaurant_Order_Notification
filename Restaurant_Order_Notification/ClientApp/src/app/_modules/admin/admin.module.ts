import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routing.module';
import { CoreModule } from '../core.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
    AdminSidebarComponent,
    ListOrdersComponent
  ]
})
export class AdminModule {

}
