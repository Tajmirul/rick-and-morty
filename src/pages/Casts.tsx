import { useQuery } from '@apollo/client';
import CommonCasts from 'components/CommonCasts';
import { GET_CHARACTERS } from 'gqlQueries/query';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Character } from 'types/character';
import { Pagination } from 'types/response';

const Casts: FC = () => {
    const [searchParams] = useSearchParams();

    const page = searchParams.get('page');
    const q = searchParams.get('q');

    const { data, loading } = useQuery(GET_CHARACTERS, {
        variables: {
            page: Number(page) ?? 1,
            name: q,
        },
    });
    const characters: Character[] = data?.characters?.results;
    const pagination: Pagination = data?.characters?.info;

    return <CommonCasts characters={characters} loading={loading} pagination={pagination} />;
};

export default Casts;
