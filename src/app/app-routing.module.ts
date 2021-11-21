import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlowserComponent } from './pages/blowser/blowser.component';

const routes: Routes = [
  { path: 'blowser', component: BlowserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
