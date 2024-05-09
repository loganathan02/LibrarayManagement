import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',component:AdduserComponent
  },
  {
    path:'add',component:AdduserComponent
  },
  {
    path:'list',component:ListuserComponent
  },
  {
    path:'edit/:id',component:EdituserComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  
  
}
