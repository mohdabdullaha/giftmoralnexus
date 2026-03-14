import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { content } from "../../data/content";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";

const getYoutubeId = (url) => {
    if (!url) return "";
    if (url.includes("/shorts/")) {
        return url.split("/").pop().split("?")[0];
    }
    if (url.includes("youtu.be/")) {
        return url.split("/").pop().split("?")[0];
    }
    if (url.includes("youtube.com/watch")) {
        return new URL(url).searchParams.get("v");
    }
    return "";
};

const MotivationalVideos = () => {
    const videos = content.motivationalVideos.videos;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar pageTitle="Videos" />

            <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
                <SectionHeading centered={false}>Motivational <span className="text-green">Videos</span></SectionHeading>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video) => {
                        const id = getYoutubeId(video.youtube);
                        const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

                        return (
                            <Link
                                key={video.id}
                                to={`/videos/${video.id}`}
                                className="group"
                            >
                                <div className="bg-white rounded-xl shadow overflow-hidden">
                                    <img
                                        src={thumbnail}
                                        alt={video.title}
                                        className="w-full h-44 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-sm font-semibold">{video.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MotivationalVideos;