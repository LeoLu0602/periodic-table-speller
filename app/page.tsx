'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface Response {
  isBreakable: Boolean;
  resultArray: string[];
}

export default function Home() {
  const [sentence, setSentence] = useState<string>('');
  const [response, setResponse] = useState<Response>({
    isBreakable: true,
    resultArray: [],
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSentence(e.target.value);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      sendSentence(sentence);
    }
  }

  function sendSentence(sentence: string) {}

  return (
    <>
      <div className='h-auto w-11/12 text-center text-6xl font-bold text-white'>
        Periodic Table Speller
      </div>
      <input
        className='h-16 w-3/5 rounded-lg p-4 text-2xl focus:outline-none max-[480px]:w-[320px]'
        value={sentence}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <div className='flex h-16 w-3/5 items-center overflow-auto whitespace-pre rounded-lg bg-green-300 px-[30px] text-2xl max-[480px]:w-[320px]'>
        {response.isBreakable &&
          response.resultArray.map((symbol, i) => (
            <div
              key={i}
              className={clsx('font-bold', {
                'text-red-500': i % 3 === 0,
                'text-green-500': i % 3 === 1,
                'text-blue-500': i % 3 === 2,
              })}
            >
              {symbol}
            </div>
          ))}
      </div>
    </>
  );
}
