import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';

const routes: Routes = [
  {path:'public', loadChildren:() => import('./public/public.module').then((m) => m.PublicModule),canActivate:[LoginGuard]},
  {path:'private', loadChildren:() => import('./private/private.module').then((m) => m.PrivateModule),canActivate:[LogoutGuard]},
  {path:'',redirectTo:'public',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
