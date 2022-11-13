import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsPage } from './character_details.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailsPageRoutingModule {}
