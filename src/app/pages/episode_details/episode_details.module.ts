import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EpisodeDetailsPageRoutingModule } from './episode_details-routing.module';
import { EpisodeDetailsPage } from './episode_details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeDetailsPageRoutingModule
  ],
  declarations: [EpisodeDetailsPage]
})
export class EpisodeDetailsPageModule { }
