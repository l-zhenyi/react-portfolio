  'use client';
  import { useState } from 'react';

  export function Exchange({ exchange }: { exchange: string }) {
    const [showFirst, setShowFirst] = useState(true);
    const [first, second] = exchange.split('//').map(str => str.trim());

    const handleClick = () => {
      setShowFirst(prev => !prev);
    };

    return (
      <div
        onClick={handleClick}
        className="cursor-pointer transition duration-300 space-y-6 px-15 py-6 select-none whitespace-pre-line"
        style={{ minHeight: '6rem' }}
      >
        {showFirst ? (
          <div className="text-left italic text-slate-400">
            “{first}”
          </div>
        ) : (
          <div className="text-right italic text-slate-400 translate-y-8">
            “{second}”
          </div>
        )}
      </div>
    );
  }
