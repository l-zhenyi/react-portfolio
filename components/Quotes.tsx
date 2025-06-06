'use client';
import { useState } from 'react';

type Quote = {
  text: string;
  author: string;
};

export function Quotes({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-slate-400 transition duration-200 text-center p-2 break-words max-w-full md:max-w-3xl"
      style={{ minHeight: '6rem' }}
    >
      <p className="italic whitespace-pre-lines">"{quotes[index].text}"</p>
      <p className="mt-2 font-bold not-italic text-sm">{quotes[index].author}</p>
    </div>
  );
}
