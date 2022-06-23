import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component:ChildComponent,
    path:"data/:id"
  },
  {
    component:NotfoundComponent,
    path:"**"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
