import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';
import CommonCasts from 'components/CommonCasts';
import { GET_EPISODE_CHARACTERS } from 'gqlQueries/query';
import { useParams, useSearchParams } from 'react-router-dom';
import { Character } from 'types/character';
import { Pagination } from 'types/response';

const EpisodeCasts: FC = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    const { episodeId } = useParams();

    const { data, loading } = useQuery(GET_EPISODE_CHARACTERS, {
        variables: {
            page: Number(page) ?? 1,
            episodeId,
        },
    });

    const characters: Character[] = data?.episode?.characters;
    const pagination: Pagination = data?.episode?.info;

    return (
        <>
            <Helmet>{data?.episode?.name && <title>{data?.episode?.name}</title>}</Helmet>
            <CommonCasts characters={characters} loading={loading} pagination={pagination} />;
        </>
    );
};

export default EpisodeCasts;
