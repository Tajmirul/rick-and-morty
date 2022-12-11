import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int, $name: String) {
        characters(page: $page, filter: { name: $name }) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                image
            }
        }
    }
`;

export const GET_EPISODE_CHARACTERS = gql`
    query GetEpisodeCharacters($episodeId: ID!) {
        episode(id: $episodeId) {
            id
            characters {
                id
                name
                image
            }
        }
    }
`;

export const GET_LOCATION_CHARACTERS = gql`
    query GetLocationCharacters($locationId: ID!) {
        location(id: $locationId) {
            id
            residents {
                id
                name
                image
            }
        }
    }
`;

export const GET_CHARACTER = gql`
    query GetCharacter($charId: ID!) {
        character(id: $charId) {
            id
            name
            status
            species
            type
            gender
            origin {
                name
            }
            location {
                name
            }
            image
            episode {
                id
                name
            }
        }
    }
`;

export const GET_EPISODES = gql`
    query {
        episodes {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    status
                }
                created
            }
        }
    }
`;

export const GET_LOCATIONS = gql`
    query {
        locations {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    status
                }
                created
            }
        }
    }
`;
