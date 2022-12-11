import { Character } from './character';
import { Episode } from './episode';
import { Location } from './location';

export interface Pagination {
    count: number;
    pages: number;
    next: number;
    prev: number;
}

export interface Response<T> {
    info: Pagination;
    results: T[];
}

export interface GetCharResponse {
    characters: Response<Character>;
}

export interface GetLocationResponse {
    locations: Response<Location>;
}

export interface GetEpisodeResponse {
    episodes: Response<Episode>;
}
