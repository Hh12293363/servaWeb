import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VeryfyInfoComponent } from './veryfy-info/veryfy-info.component';


const routes: Routes = [
  {path: 'verify',component:LoginComponent, children:[
    {path: 'login', component:VeryfyInfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyRoutingModule { }
