'use client';

import { useState } from 'react';

export default function Home() {
  const [sentence, setSentence] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSentence(e.target.value);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      sendSentence(sentence);
    }
  }

  function sendSentence(txt: string) {}

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-green-400 flex flex-col justify-center items-center gap-[80px]">
      <div className="w-full text-[90px] text-center font-bold text-white">
        Periodic Table Speller
      </div>
      <input
        className="w-[900px] h-[120px] text-[40px] shadow-2xl focus:outline-none px-[30px] rounded-lg"
        value={sentence}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <div className="w-[900px] h-[120px] text-[40px] bg-green-300 px-[30px] overflow-auto flex items-center rounded-lg">
        {sentence}
      </div>
    </div>
  );
}
