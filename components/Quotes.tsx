'use client';
import { useState, useEffect, useRef } from 'react';

type Quote = {
  text: string;
  author: string;
};

export function Quotes({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const advanceQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(advanceQuote, 10000);
  };

  const handleClick = () => {
    advanceQuote();
    resetInterval(); // Restart timer on manual click
  };

  useEffect(() => {
    resetInterval(); // Start auto cycle on mount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [quotes.length]);

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-slate-400 transition duration-200 text-center p-4 break-words max-w-full md:max-w-3xl"
      style={{ minHeight: '8rem' }}
    >
      <p className="italic whitespace-pre-line overflow-hidden">{`"${quotes[index].text}"`}</p>
      <p className="mt-2 font-bold not-italic text-sm">{quotes[index].author}</p>
    </div>
  );
}
