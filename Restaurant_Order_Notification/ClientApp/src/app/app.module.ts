import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './_modules/core.module';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      CoreModule,
      RouterModule.forRoot(routes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
