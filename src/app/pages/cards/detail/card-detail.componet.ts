import { Card } from './../../../models/cards/card';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

    public card: Card;

    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        if (id) {
            this.pokemonService.id(id).subscribe(e => {
                if(e){
                    this.card = e.cards[0];
                }
            });
        }
    }

}
