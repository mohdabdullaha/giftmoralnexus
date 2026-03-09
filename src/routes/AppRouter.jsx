import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Truthfulness from '../pages/Truthfulness/Truthfulness';
import QuranTruthfulness from '../pages/QuranTruthfulness/QuranTruthfulness';
import SunnahTruthfulness from '../pages/SunnahTruthfulness/SunnahTruthfulness';
import Questions from '../pages/Questions/Questions';
import Dilemmas from '../pages/Dilemmas/Dilemmas';
import MirrorMoments from '../pages/MirrorMoments/MirrorMoments';
import RolePlay from '../pages/RolePlay/RolePlay';
import Pledge from '../pages/Pledge/Pledge';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Infographics from '../pages/Infographics/Infographics';
import RazEHayat from '../pages/RazEHayat/RazEHayat';
import VisionMission from '../pages/VisionMission/VisionMission';
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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/infographics" element={<Infographics />} />
                <Route path="/razehayat" element={<RazEHayat />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/videos" element={<MotivationalVideos />} />
                <Route path="/videos/:id" element={<VideoPlayer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
