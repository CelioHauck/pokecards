import { Effect } from './effect';
import { Attack } from './attack';

export interface Card {
    id: string,
    name: string,
    imageUrl: string,
    imageUrlHiRes: string,
    types: string[],
    attacks: Attack[],
    resistances: Effect[]
    weaknesses: Effect[],
}