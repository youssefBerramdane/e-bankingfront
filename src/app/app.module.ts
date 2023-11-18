import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule}from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import { RegistreComponent } from './registre/registre.component';
import { ProfileTamplateComponent } from './profile-tamplate/profile-tamplate.component';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { ClientListComponent } from './profile-tamplate/client-list/client-list.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { AddClientComponent } from './profile-tamplate/add-client/add-client.component';
import { ClientComponent } from './profile-tamplate/client/client.component';
import { EditClientComponent } from './profile-tamplate/edit-client/edit-client.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { OperationlistComponent } from './profile-tamplate/operationlist/operationlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistreComponent,
    ProfileTamplateComponent,
    ClientListComponent,
    AddClientComponent,
    ClientComponent,
    EditClientComponent,
    OperationlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    NotifierModule.withConfig({
      position:{
        horizontal:{
          position:'right',
          distance:15
        },
        vertical:{
          position:'top',
          distance:15
        }
      }
    }),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
