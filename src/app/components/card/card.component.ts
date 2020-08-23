import { Card } from './../../models/cards/card';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input()
    public itemCard: Card;
}
