import { FC, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BiLinkExternal } from 'react-icons/bi';
import { GET_CHARACTER } from 'gqlQueries/query';
import { useQuery } from '@apollo/client';
import { Character } from 'types/character';

const CastDetails: FC = () => {
    const containerEl = useRef<HTMLDivElement>(null);
    const { castId } = useParams();
    const { data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            charId: castId,
        },
    });

    const character: Character = data?.character;

    if (loading) return <p>Loading...</p>;
    return (
        <>
            <Helmet>
                <title>{character.name}</title>
            </Helmet>
            <div
                className="w-full h-full min-h-screen bg-cover bg-center bg-no-repeat pt-[50px] lg:pt-[150px] 2xl:pt-[250px]"
                style={{
                    backgroundImage: 'url(/images/cast-details/Background.png)',
                }}
                ref={containerEl}>
                <section className="pt-20 pb-[100px] mx-auto relative">
                    <div className="container">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-[17px] xl:gap-10">
                            <div className="hidden xl:flex items-center justify-center">
                                {/* bg-gradient-to-br from-primary to-secondary bg-clip-text */}
                                {/* absolute top-1/2 -translate-y-1/2 -rotate-90 */}
                                <span
                                    className=" text-[100px] font-extrabold whitespace-nowrap select-none pointer-events-none text-transparent -scale-[1] capitalize"
                                    style={{
                                        WebkitTextStroke: '2px #9dfe001a',
                                        textOrientation: 'mixed',
                                        writingMode: 'vertical-rl',
                                    }}>
                                    {character.name}
                                </span>
                            </div>
                            <div className="xl:col-span-4 flex flex-col justify-center items-center">
                                <h2 className="font-semibold text-2xl lg:text-3xl 2xl:text-5xl text-primary text-center mb-5 xl:mb-8">
                                    {character.name}
                                </h2>

                                <div className="p-[30px] xl:p-[50px] rounded-md border border-primary/40 bg-gray-50/5">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="hidden xl:flex items-center justify-center">
                                <div className="h-[320px] w-[1px] bg-gradient-to-br from-secondary to-primary"></div>
                            </div>

                            <div className="xl:col-span-6">
                                <div className="grid grid-cols-3 gap-[17px] xl:gap-10">
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md">
                                        <img
                                            src="/images/cast-details/Icons/SVG/Status.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="xl:mb-2 text-white text-xs md:text-base">
                                            Status
                                        </p>
                                        <h5 className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2">
                                            {character.status}
                                        </h5>
                                    </div>
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md">
                                        <img
                                            src="/images/cast-details/Icons/SVG/Species.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="xl:mb-2 text-white text-xs md:text-base">
                                            Species
                                        </p>
                                        <h5 className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2">
                                            {character.species}
                                        </h5>
                                    </div>
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md">
                                        <img
                                            src="/images/cast-details/Icons/SVG/Gender.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="xl:mb-2 text-white text-xs md:text-base">
                                            Gender
                                        </p>
                                        <h5 className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2">
                                            {character.gender}
                                        </h5>
                                    </div>

                                    {/* full width cart */}
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md col-span-3">
                                        <img
                                            src="/images/cast-details/Icons/SVG/origin.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="xl:mb-2 text-white text-xs md:text-base">
                                            Origin
                                        </p>
                                        <h5 className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2">
                                            {character.origin.name}
                                            <Link to="#" className="align-middle float-right">
                                                <BiLinkExternal />
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md col-span-3">
                                        <img
                                            src="/images/cast-details/Icons/SVG/Location.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="xl:mb-2 text-white text-xs md:text-base">
                                            Last Known Location
                                        </p>
                                        <h5 className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2">
                                            {character.location.name}
                                            <Link to="#" className="align-middle float-right">
                                                <BiLinkExternal />
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="border border-primary/40 bg-gray-50/5 px-4 xl:px-8 py-4 rounded-md col-span-3">
                                        <img
                                            src="/images/cast-details/Icons/SVG/episodes.svg"
                                            alt=""
                                            className="mb-3 xl:mb-5 w-5 h-5 lg:w-auto lg:h-auto"
                                        />
                                        <p className="mb-3 md:mb-6 text-white text-xs md:text-base">
                                            Episode(s)
                                        </p>
                                        <ul className="list-disc pl-8">
                                            {character.episode.slice(0, 5).map((episode) => (
                                                <li
                                                    className="text-base md:text-xl 2xl:text-4xl font-semibold text-white xl:mb-2"
                                                    key={episode.id}>
                                                    <Link to={`/casts/episodes/${episode.id}`}>
                                                        {episode.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CastDetails;
