import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CoreModule } from '../core.module';
import { customerRoutes } from './user.routing.module';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(customerRoutes),
  ],
  declarations: [
    UserComponent,
    FoodMenuComponent,
    CheckoutComponent
  ]
})
export class UserModule { }
