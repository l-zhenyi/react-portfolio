'use client';
import { useState } from 'react';

export function Quotes({ quotes }: { quotes: string[] }) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div
      onClick={handleClick}
      className="whitespace-pre-line cursor-pointer italic text-slate-400 hover:text-slate-200 transition duration-200 text-center p-2 break-words max-w-full md:max-w-3xl"
    style={{ minHeight: '6rem' }} >
      {quotes[index]}
    </div>
  );
}
