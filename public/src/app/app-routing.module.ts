import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent} from './contact/contact.component';
import { OnlineComponent } from './online/online.component';
import { SpotsComponent } from './spots/spots.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'online', component: OnlineComponent},
  { path: 'spots', component: SpotsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
