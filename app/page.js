'use client';
import React, { useState } from 'react';
import Qdata from './Api.json';

const Quotes = () => {
    const [quote, setQuote] = useState(Qdata[0]);

    const randomQuote = () => {
        const rndmIndex = Math.floor(Math.random() * Qdata.length);
        setQuote(Qdata[rndmIndex]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-4/5 max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">Random Quotes</h1>
                <p className="text-lg italic text-center">"{quote.q}"</p>
                <p className="text-right mt-2 font-semibold text-indigo-600">- {quote.a}</p>
                <button
                    onClick={randomQuote}
                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Get New Quote
                </button>
            </div>
        </div>
    );
};

export default Quotes;
