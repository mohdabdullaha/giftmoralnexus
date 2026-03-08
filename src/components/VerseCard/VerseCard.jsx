import React from 'react';

const VerseCard = ({ verse }) => {
    return (
        <div className="bg-ice border border-ice-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all mb-8 max-w-4xl mx-auto">
            <div className="text-right mb-6">
                <h4 className="text-navy font-bold text-xl mb-4 text-left">{verse.surah}</h4>
                <p className="text-3xl md:text-4xl text-green leading-loose font-arabic pb-4 border-b border-green/20" dir="rtl">
                    {verse.arabic}
                </p>
            </div>
            <div className="text-left space-y-4">
                <p className="text-lg italic text-gray-700">"{verse.translation}"</p>
                <p className="text-sm text-navy/70 uppercase font-bold tracking-wider">Reflection:</p>
                <p className="text-gray-600 border-l-4 border-gold pl-4">{verse.reflection}</p>

                <div className="mt-8 flex justify-center">
                    <audio controls src={verse.audio} className="w-full max-w-md h-10" />
                </div>
            </div>
        </div>
    );
};

export default VerseCard;
