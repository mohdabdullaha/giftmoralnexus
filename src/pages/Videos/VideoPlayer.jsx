import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { content } from '../../data/content';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

const getVideoById = (id) => {
    return content.motivationalVideos.videos.find((v) => v.id.toString() === id);
};

const extractYoutubeId = (url) => {
    if (!url || typeof url !== 'string') return null;
    try {
        if (url.includes('youtu.be/')) {
            return url.split('youtu.be/').pop().split(/[?&]/)[0];
        }

        if (url.includes('/shorts/')) {
            return url.split('/shorts/').pop().split(/[?&]/)[0];
        }

        const urlObj = new URL(url);
        if (urlObj.searchParams.has('v')) return urlObj.searchParams.get('v');
        return urlObj.pathname.split('/').filter(Boolean).pop();
    } catch (e) {
        const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{6,})/);
        return m ? m[1] : null;
    }
};

const VideoPlayer = () => {
    const { id } = useParams();
    const video = getVideoById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!video) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <Navbar />
                <h2 className="text-2xl font-semibold mb-4">Video Not Found</h2>
                <Link
                    to="/videos"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    ← Back to Videos
                </Link>
                <Footer />
            </div>
        );
    }

    const [useIframeFallback, setUseIframeFallback] = useState(false);
    const videoId = extractYoutubeId(video.youtube);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : (video.youtube || '');
    const playerUrl = watchUrl || embedUrl;

    if (!playerUrl) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <Navbar />
                <h2 className="text-2xl font-semibold mb-4">Video source unavailable</h2>
                <p className="mb-6">This video does not have a valid source URL.</p>
                <Link
                    to="/videos"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    ← Back to Videos
                </Link>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Videos" />


            <main className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-6 py-12 w-full text-center">
                <SectionHeading>{video.title}</SectionHeading>


                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mx-auto">
                    {videoId ? (
                        <iframe
                            title={video.title}
                            src={embedUrl}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-xl border-0"
                        />
                    ) : (
                        <ReactPlayer
                            url={playerUrl}
                            controls
                            width="100%"
                            height="100%"
                            className="rounded-xl"
                            onError={() => setUseIframeFallback(true)}
                        />
                    )}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/videos"
                        className="inline-block px-8 py-3 bg-navy text-white rounded-xl hover:bg-navy-dark transition-all shadow-lg shadow-navy/20 font-bold tracking-widest"
                    >
                        ← Back to Videos
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VideoPlayer;