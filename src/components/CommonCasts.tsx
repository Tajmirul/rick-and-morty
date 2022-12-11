import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'types/character';
import { Pagination } from 'types/response';
import Cart from './Cart';
import Paginate from './Paginate';
import SearchBox from './SearchBox';

interface Props {
    loading: boolean;
    characters: Character[];
    pagination: Pagination;
}

const CommonCasts: FC<Props> = ({ loading, characters, pagination }) => {
    return (
        <div
            className="w-full h-full min-h-screen bg-cover bg-center bg-no-repeat pt-[150px] md:pt-[200px] 2xl:pt-[250px]"
            style={{
                backgroundImage: 'url(/images/cast/Background.png)',
            }}>
            <div className="bg-[#2A3E84] blur-[78px] h-[356px] w-[356px] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="bg-[#2A3E84] blur-[78px] h-[178px] w-[356px] rounded-[150px_150px_0_0] absolute bottom-0 left-0 -translate-x-1/2 -z-[1] pointer-events-none"></div>

            {/* start::banner section */}
            <section className="relative">
                <div className="container">
                    <div className="flex items-center justify-between mb-10">
                        <h1 className="text-xl lg:text-3xl 2xl:text-[64px] font-semibold text-primary">
                            The Cast
                        </h1>
                        <SearchBox />
                    </div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : characters?.length ? (
                        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-9 lg:gap-[50px] xl:gap-[67px] pb-16">
                            {characters?.map((char) => (
                                <Link to={`/casts/${char.id}`} key={char?.id}>
                                    <Cart
                                        key={char?.id}
                                        image={char.image}
                                        title={char.name}
                                        category=""
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-3xl text-center capitalize">No data</p>
                    )}
                    {pagination && pagination.count > 0 && <Paginate info={pagination} />}
                </div>
            </section>
        </div>
    );
};

export default CommonCasts;
