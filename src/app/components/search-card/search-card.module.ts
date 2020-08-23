import { SearchCardComponent } from './search-card.component';

import { NgModule } from '@angular/core';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchCardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [SearchCardComponent],
    providers: [],
    bootstrap: [SearchCardComponent]
})
export class SearchCardModule { }
