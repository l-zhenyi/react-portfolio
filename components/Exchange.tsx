'use client';
import { useState } from 'react';

export function Exchange({ exchange }: { exchange: string }) {
  const [index, setIndex] = useState(0); 
  const [first, second, third] = exchange.split('//').map(str => str.trim());

  const handleClick = () => {
    setIndex(prev => (prev + 1) % 3); 
  };

  let content;
  if (index === 0) {
    content = (
      <div className="text-left italic text-slate-400">
        “{first}”
      </div>
    );
  } else if (index === 1) {
    content = (
      <div className="text-right italic text-slate-400 translate-y-8">
        “{second}”
      </div>
    );
  } else {
    content = (
      <div className="text-center italic text-slate-400 translate-y-4 font-bold">
        “{third}”
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transition duration-300 space-y-6 px-15 py-6 select-none whitespace-pre-line"
      style={{ minHeight: '6rem' }}
    >
      {content}
    </div>
  );
}
