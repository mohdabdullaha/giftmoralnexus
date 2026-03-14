import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Truthfulness from '../pages/Truthfulness';
import QuranTruthfulness from '../pages/QuranTruthfulness';
import SunnahTruthfulness from '../pages/SunnahTruthfulness';
import Questions from '../pages/Questions';
import Dilemmas from '../pages/Dilemmas';
import MirrorMoments from '../pages/MirrorMoments';
import RolePlay from '../pages/RolePlay';
import Pledge from '../pages/Pledge';
import Infographics from '../pages/Infographics';
import RazEHayat from '../pages/RazEHayat';
import MotivationalVideos from '../pages/Videos/MotivationalVideos';
import VideoPlayer from '../pages/Videos/VideoPlayer';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/truthfulness" element={<Truthfulness />} />
                <Route path="/quran" element={<QuranTruthfulness />} />
                <Route path="/sunnah" element={<SunnahTruthfulness />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/dilemmas" element={<Dilemmas />} />
                <Route path="/mirror-moments" element={<MirrorMoments />} />
                <Route path="/roleplay" element={<RolePlay />} />
                <Route path="/pledge" element={<Pledge />} />
                <Route path="/infographics" element={<Infographics />} />
                <Route path="/razehayat" element={<RazEHayat />} />
                <Route path="/videos" element={<MotivationalVideos />} />
                <Route path="/videos/:id" element={<VideoPlayer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
