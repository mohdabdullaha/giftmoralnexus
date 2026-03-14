import React from 'react';

const AudioPlayer = ({ urduSrc, englishSrc, title }) => {
    return (
        <div className="w-full max-w-2xl mx-auto my-12 p-8 bg-ice/50 border border-ice-border rounded-3xl shadow-sm">
            {title && (
                <h3 className="text-navy text-lg font-bold mb-6 text-center tracking-tight">
                    {title}
                </h3>
            )}

            <div className="space-y-8">
                {urduSrc && (
                    <div className="flex flex-col gap-3 items-start text-left">
                        <label className="text-sm font-black text-navy uppercase tracking-[0.2em] ml-2">
                            Urdu Audio 🔊
                        </label>
                        <audio
                            controls
                            className="w-full h-10 custom-audio-player"
                            src={urduSrc}
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}

                {englishSrc && (
                    <div className="flex flex-col gap-3 items-start text-left">
                        <label className="text-sm font-black text-navy uppercase tracking-[0.2em] ml-2">
                            English Audio 🔊
                        </label>
                        <audio
                            controls
                            className="w-full h-10 custom-audio-player"
                            src={englishSrc}
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AudioPlayer;