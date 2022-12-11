import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from 'gqlQueries/query';
import { GetCharResponse, GetEpisodeResponse, GetLocationResponse } from 'types/response';
import Cart from 'components/Cart';
import Slider from 'components/Slider';

const Home: FC = () => {
    const { data: locationData, loading: locationLoading } =
        useQuery<GetLocationResponse>(GET_LOCATIONS);

    const { data: characterData, loading: charLoading } = useQuery<GetCharResponse>(GET_CHARACTERS);

    const { data: episodeData, loading: episodeLoading } =
        useQuery<GetEpisodeResponse>(GET_EPISODES);

    const characters = characterData?.characters?.results;
    const locations = locationData?.locations?.results;
    const episodes = episodeData?.episodes?.results;

    return (
        <>
            <div className="bg-[#2A3E84] blur-[78px] h-[356px] w-[356px] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="bg-[#2A3E84] blur-[78px] h-[178px] w-[356px] rounded-[150px_150px_0_0] absolute bottom-0 left-0 -translate-x-1/2 -z-[1] pointer-events-none"></div>

            {/* start::banner section */}
            <section className="xl:relative aspect-[171/100]">
                <div className="absolute top-0 left-0 right-0 bottom-0 xl:bottom-auto pointer-events-none">
                    <img
                        src="/images/home-page/background-elements/Background.png"
                        className="w-full h-full xl:h-auto object-cover"
                    />
                </div>
                <div className="text-center pt-[250px]">
                    <h1 className="heading-primary text-left inline-block relative">
                        <span className="bg-clip-text text-transparent blur-[75px] bg-gradient-to-br from-secondary to-primary absolute top-0 left-1/2 -translate-x-1/2 scale-90 -z-[1] whitespace-nowrap select-none pointer-events-none">
                            NFT MAPKEasd
                        </span>
                        <img
                            src="images/home-page/hero-elements/pill.png"
                            alt="pill"
                            className="absolute bottom-full right-0 hidden lg:block"
                        />
                        <img
                            src="images/home-page/hero-elements/bubble.png"
                            alt="bubble"
                            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[43%] max-w-[90px] lg:max-w-[140px] 2xl:max-w-none"
                        />
                        <span className="italic text-white">
                            The
                            <img
                                src="images/home-page/hero-elements/portal.png"
                                alt="portal"
                                className="inline-block max-h-[56px] lg:max-h-[80px] 2xl:max-h-[145px] align-top lg:mx-5 -mt-4"
                            />
                        </span>
                        RICK & <br /> MORTY
                        <span className="italic text-white">WIKI</span>
                        <img
                            src="images/home-page/hero-elements/Gun.png"
                            alt="portal"
                            className="absolute -bottom-1/2 left-[92%] w-[130px] lg:w-[180px] 2xl:w-auto"
                        />
                    </h1>
                </div>
            </section>
            {/* end::banner section */}

            {/* start::characters section */}
            <section className="xl:hidden pt-20 mx-auto px-5 relative">
                <div className="container relative">
                    {charLoading ? (
                        <div className="flex justify-center items-center text-2xl h-[300px]">
                            Loading...
                        </div>
                    ) : characters?.length ? (
                        <div>
                            <h2 className="heading-secondary capitalize flex items-center justify-between">
                                Meet the cast
                                <Link
                                    to="/casts"
                                    className="text-xs md:text-base border border-secondary px-4 py-2 rounded-xl text-white">
                                    View All
                                </Link>
                            </h2>

                            <Slider>
                                {characters?.map((character) => (
                                    <SwiperSlide key={character.id}>
                                        <Link
                                            to={`/casts/${character.id}`}
                                            className="w-full block">
                                            <Cart image={character.image} title={character.name} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[300px]">
                            <p className="text-white text-2xl">No character Found</p>
                        </div>
                    )}
                </div>
            </section>
            {/* end::characters section */}

            {/* start::Episodes section */}
            <section className="mx-auto px-5 relative">
                <img
                    src="images/home-page/background-elements/Spiral.png"
                    className="hidden xl:block absolute right-0 top-0 max-w-none pointer-events-none"
                />
                <div className="xl:mt-[50px] pt-[30px] 2xl:pt-[60px] container relative">
                    <img
                        src="images/home-page/background-elements/Star.png"
                        className="hidden xl:block absolute top-0 left-0 max-w-none pointer-events-none"
                    />

                    {episodeLoading ? (
                        <div className="flex justify-center items-center text-2xl h-[300px]">
                            Loading...
                        </div>
                    ) : episodes?.length ? (
                        <div>
                            <h2 className="heading-secondary">Episodes</h2>

                            <Slider>
                                {episodes?.map((episode) => (
                                    <SwiperSlide key={episode.id}>
                                        <Link
                                            to={`/casts/episodes/${episode.id}`}
                                            className="w-full block">
                                            <Cart title={episode.name} category={episode.episode} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[300px]">
                            <p className="text-white text-2xl">No Episodes Found</p>
                        </div>
                    )}
                </div>
            </section>
            {/* end::Episodes section */}

            {/* start::locations section */}
            <section className="pt-[32px] xl:pt-[110px] pb-[45px] lg:pb-[60px] 2xl:pb-20 mx-auto px-5 relative">
                <div className="container">
                    {locationLoading ? (
                        <div className="flex justify-center items-center text-2xl h-[300px]">
                            Loading...
                        </div>
                    ) : locations?.length ? (
                        <div>
                            <h2 className="heading-secondary">Locations</h2>

                            <Slider>
                                {locations?.map((location) => (
                                    <SwiperSlide key={location.id}>
                                        <Link
                                            to={`/casts/locationS/${location.id}`}
                                            className="w-full block">
                                            <Cart
                                                title={location.name}
                                                category={`#${location.id}`}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[300px]">
                            <p className="text-white text-2xl">No Locations Found</p>
                        </div>
                    )}
                </div>
            </section>
            {/* end::locations section */}
        </>
    );
};

export default Home;
