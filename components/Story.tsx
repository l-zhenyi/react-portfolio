'use client';
import { useState } from 'react';

export function Exchange({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(prev => (prev + 1) % lines.length); 
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transition duration-300 text-center px-10 py-6 select-none whitespace-pre-line text-slate-400 italic"
      style={{ minHeight: '2rem' }}
    >
      {lines[index]}
    </div>
  );
}
