import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Truthfulness from '../pages/cardinal_virtues/Truthfulness';
import QuranTruthfulness from '../pages/cardinal_virtues/QuranTruthfulness';
import SunnahTruthfulness from '../pages/cardinal_virtues/SunnahTruthfulness';
import Questions from '../pages/cardinal_virtues/Questions';
import Dilemmas from '../pages/cardinal_virtues/Dilemmas';
import MirrorMoments from '../pages/cardinal_virtues/MirrorMoments';
import RolePlay from '../pages/cardinal_virtues/RolePlay';
import Pledge from '../pages/cardinal_virtues/Pledge';
import Infographics from '../pages/Infographics';
import RazEHayat from '../pages/cardinal_virtues/RazEHayat';
import MotivationalVideos from '../pages/Videos/MotivationalVideos';
import VideoPlayer from '../pages/Videos/VideoPlayer';
import ETPLanding from '../pages/emandar_tajir/ETPLanding';
import ETPToRs from '../pages/emandar_tajir/ETPToRs';

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
                <Route path="/etp" element={<ETPLanding />} />
                <Route path="/etp/tors" element={<ETPToRs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
