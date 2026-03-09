import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { content } from '../../data/content';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const getVideoById = (id) => {
    return content.motivationalVideos.videos.find((v) => v.id.toString() === id);
};

// ✅ Function to transform URLs for ReactPlayer
const transformYoutubeUrl = (url) => {
    if (!url) return '';
    // Convert Shorts to watch?v= format
    if (url.includes('/shorts/')) {
        const id = url.split('/').pop().split('?')[0]; // remove query params
        return `https://www.youtube.com/watch?v=${id}`;
    }
    // Ensure www prefix for other YouTube URLs
    if (url.includes('youtube.com') && !url.includes('www.youtube.com')) {
        return url.replace('youtube.com', 'www.youtube.com');
    }
    return url;
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

    const url = transformYoutubeUrl(video.youtube);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar pageTitle={video.title} />

            <main className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    {video.title}
                </h1>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mx-auto">
                    <ReactPlayer
                        url={url}
                        controls
                        width="100%"
                        height="100%"
                        className="rounded-xl"
                    />
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/videos"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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