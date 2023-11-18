import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import { ProfileTamplateComponent } from './profile-tamplate/profile-tamplate.component';
import { ClientListComponent } from './profile-tamplate/client-list/client-list.component';
import { AddClientComponent } from './profile-tamplate/add-client/add-client.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { ClientComponent } from './profile-tamplate/client/client.component';
import { EditClientComponent } from './profile-tamplate/edit-client/edit-client.component';
import { OperationlistComponent } from './profile-tamplate/operationlist/operationlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registre",component:RegistreComponent},
  {path:"profile",canActivate:[AuthenticationGuard],component:ProfileTamplateComponent,children:[
    {path:"clientList",canActivate:[AuthorizationGuard],component:ClientListComponent},
    {path:"addclient",canActivate:[AuthorizationGuard],component:AddClientComponent},
    {path:"client",component:ClientComponent},
    {path:"editclient/:id",component:EditClientComponent},
    {path:"operaionlist/:id",component:OperationlistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
