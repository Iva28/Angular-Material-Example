import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogeditComponent } from './dogedit/dogedit.component';

const routes: Routes = [
  { path: 'dogs', component: DogsListComponent},
  { path: 'dogs/new', component: DogeditComponent},
  { path: 'newdog', component: DogeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
