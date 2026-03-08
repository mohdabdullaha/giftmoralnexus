import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ urduSrc, englishSrc, buttonLabel }) => {
    const [activeAudio, setActiveAudio] = useState(null); // 'urdu' | 'english' | null
    const urduRef = useRef(null);
    const englishRef = useRef(null);

    // Safely stop all audios
    const stopAll = () => {
        if (urduRef.current) {
            urduRef.current.pause();
            urduRef.current.currentTime = 0;
        }
        if (englishRef.current) {
            englishRef.current.pause();
            englishRef.current.currentTime = 0;
        }
        setActiveAudio(null);
    };

    // Toggle audio safely
    const toggleAudio = (type) => {
        if (type === 'urdu' && !urduRef.current) return;
        if (type === 'english' && !englishRef.current) return;

        if (activeAudio === type) {
            if (type === 'urdu') urduRef.current?.pause();
            if (type === 'english') englishRef.current?.pause();
            setActiveAudio(null);
        } else {
            stopAll();
            if (type === 'urdu') urduRef.current?.play();
            if (type === 'english') englishRef.current?.play();
            setActiveAudio(type);
        }
    };

    // Reset active audio when playback ends
    useEffect(() => {
        const handleEnd = () => setActiveAudio(null);
        urduRef.current?.addEventListener('ended', handleEnd);
        englishRef.current?.addEventListener('ended', handleEnd);
        return () => {
            urduRef.current?.removeEventListener('ended', handleEnd);
            englishRef.current?.removeEventListener('ended', handleEnd);
        };
    }, []);

    return (
        <div className="flex justify-center gap-5 my-9 flex-wrap">
            {urduSrc && <audio ref={urduRef} src={urduSrc} />}
            {englishSrc && <audio ref={englishRef} src={englishSrc} />}

            {urduSrc && (
                <button
                    onClick={() => toggleAudio('urdu')}
                    className="bg-gold hover:bg-gold-dark text-black font-bold py-3.5 px-10 rounded-lg min-w-[220px] transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2"
                >
                    {buttonLabel || 'URDU'} {activeAudio === 'urdu' ? '⏸️' : '🔊'}
                </button>
            )}

            {englishSrc && (
                <button
                    onClick={() => toggleAudio('english')}
                    className="bg-gold hover:bg-gold-dark text-black font-bold py-3.5 px-10 rounded-lg min-w-[220px] transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2"
                >
                    ENGLISH {activeAudio === 'english' ? '⏸️' : '🔊'}
                </button>
            )}
        </div>
    );
};

export default AudioPlayer;