import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';
import CommonCasts from 'components/CommonCasts';
import { GET_LOCATION_CHARACTERS } from 'gqlQueries/query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from 'types/character';
import { Pagination } from 'types/response';

const LocationCasts: FC = () => {
    const { locationId } = useParams();

    const { data, loading } = useQuery(GET_LOCATION_CHARACTERS, {
        variables: {
            locationId,
        },
    });

    const characters: Character[] = data?.location?.residents;
    const pagination: Pagination = data?.location?.info;

    console.log();

    return (
        <>
            <Helmet>{data?.location?.name && <title>{data?.location?.name}</title>}</Helmet>
            <CommonCasts characters={characters} loading={loading} pagination={pagination} />;
        </>
    );
};

export default LocationCasts;
