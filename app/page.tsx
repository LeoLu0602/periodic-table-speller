'use client';

import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [sentence, setSentence] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSentence(e.target.value);
  }

  return (
    <div className='fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[80px] bg-green-400'>
      <div className='w-full text-center text-[90px] font-bold text-white'>
        Periodic Table Speller
      </div>
      <input
        className='h-[120px] w-[900px] rounded-lg px-[30px] text-[40px] shadow-2xl focus:outline-none'
        value={sentence}
        onChange={handleChange}
      />
    </div>
  );
}
