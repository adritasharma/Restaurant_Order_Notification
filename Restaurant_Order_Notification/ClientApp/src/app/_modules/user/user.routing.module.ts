import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';


export const customerRoutes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', component: FoodMenuComponent },
        ]
    }
];

@NgModule({
    exports: [RouterModule]
})

export class UserRoutingModule {

}
