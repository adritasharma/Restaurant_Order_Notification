import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const customerRoutes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', component: FoodMenuComponent },
            { path: 'menu', component: FoodMenuComponent },
            { path: 'checkout', component: CheckoutComponent }
        ]
    }
];

@NgModule({
    exports: [RouterModule]
})

export class UserRoutingModule {

}
