import { Card } from './../../../models/cards/card';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

    public cards: Card[] = [];

    constructor(private pokemonService: PokemonService) {

    }

    ngOnInit(): void {
        this.pokemonService.all().subscribe(e => {
            this.cards = e.cards.sort(this.sortCard())
            console.log(this.cards);
        });
    }



    private sortCard(): (a: Card, b: Card) => number {
        return (a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        };
    }

    public filter(search: string) {
        if (search.length > 0) {
            this.pokemonService.names(search).subscribe(e => {
                this.cards = e.cards.sort(this.sortCard());
            });
            return;
        }
        this.pokemonService.all().subscribe(e => {
            this.cards = e.cards.sort(this.sortCard());
        })
    }

}
