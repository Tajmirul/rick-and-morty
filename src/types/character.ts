import { Episode } from './episode';
import { Location } from './location';

export enum Gender {
    Male,
    Female,
    Genderless,
    unknown,
}
export enum Status {
    Alive,
    Dead,
    unknown,
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: Episode[];
    created: Date;
}
