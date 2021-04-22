import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBreedsComponent } from './common/components/list-breeds/list-breeds.component';

const routes: Routes = [
  { path: 'breed-list', pathMatch: 'full', component: ListBreedsComponent },
  { path: '',  redirectTo: '/breed-list', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
