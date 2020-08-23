import { CardDetailComponent } from './card-detail.componet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardDetailRoutingModule } from './card-detail-routing.module';

@NgModule({
    declarations: [
        CardDetailComponent
    ],
    imports: [
        CommonModule,
        CardDetailRoutingModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [
        CardDetailComponent
    ]
})
export class CardDetailModule { }
