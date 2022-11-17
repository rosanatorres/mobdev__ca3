import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharacterDetailsPageRoutingModule } from './character_details-routing.module';
import { CharacterDetailsPage} from './character_details.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CharacterDetailsPageRoutingModule,
  ],
  declarations: [CharacterDetailsPage],
})
export class CharacterDetailsPageModule {}