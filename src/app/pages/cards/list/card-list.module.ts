import { CardListRoutingModule } from './card-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './card-list.component';
import { SearchCardModule } from 'src/app/components/search-card/search-card.module';
import {MatCardModule} from '@angular/material/card';
import { CardModule } from 'src/app/components/card/card.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    SearchCardModule,
    MatCardModule,
    CardModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [
    CardListComponent
  ]
})
export class CardListModule { }
