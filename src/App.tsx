import Navbar from 'components/Navbar';
import CastDetails from 'pages/CastDetails';
import Casts from 'pages/Casts';
import EpisodeCasts from 'pages/EpisodeCast';
import Home from 'pages/Home';
import LocationCasts from 'pages/LocationCast';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/casts" element={<Casts />} />
                <Route path="/casts/episodes/:episodeId" element={<EpisodeCasts />} />
                <Route path="/casts/locations/:locationId" element={<LocationCasts />} />
                <Route path="/casts/:castId" element={<CastDetails />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </>
    );
};

export default App;
