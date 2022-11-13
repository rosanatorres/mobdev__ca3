import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesPage } from './episodes.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesPageRoutingModule {}
