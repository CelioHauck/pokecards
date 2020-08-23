

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule
    ],
    exports: [CardComponent],
    providers: [],
    bootstrap: [CardComponent]
})
export class CardModule { }
