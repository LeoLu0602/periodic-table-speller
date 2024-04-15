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
    <div className='fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[80px] bg-green-400'>
      <div className='w-full text-center text-[90px] font-bold text-white'>
        Periodic Table Speller
      </div>
      <input
        className='h-[120px] w-[900px] rounded-lg px-[30px] text-[40px] shadow-2xl focus:outline-none'
        value={sentence}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <div className="w-[900px] h-[120px] text-[40px] bg-green-300 px-[30px] overflow-auto flex items-center rounded-lg whitespace-pre">
        {response.isBreakable &&
          response.resultArray.map((symbol, i) => <div key={i} className={clsx('font-bold',{
            'text-red-500': i % 3 === 0,
            'text-green-500': i % 3 === 1,
            'text-blue-500': i % 3 === 2,
          })}>{symbol}</div>)}
      </div>
    </div>
  );
}
