'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { elements } from '@/public/elements';

const PROD_API_URL: string =
  'https://periodic-table-speller.vercel.app/api/break-sentence-to-elements';
const DEV_API_URL: string =
  'http://localhost:3000/api/break-sentence-to-elements';

interface Response {
  isBreakable: Boolean;
  resultArray: string[];
}

interface DisplayedSymbol {
  symbol: string;
  color: string;
  source: string | undefined;
}

export default function Main() {
  const [sentence, setSentence] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [response, setResponse] = useState<Response>({
    isBreakable: true,
    resultArray: [],
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSentence(e.target.value);
  }

  async function handleKeyUp(
    e: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> {
    if (e.key === 'Enter') {
      if (sentence.length === 0) {
        clear();

        return;
      }

      setIsSending(true);

      try {
        setResponse(await sendSentence(sentence));
      } catch (err) {
        console.error('API error: ', err);
        alert('API error');

        setResponse({
          isBreakable: true,
          resultArray: [],
        });
      }

      setIsSending(false);
    }
  }

  async function sendSentence(sentence: string): Promise<Response> {
    try {
      const res: globalThis.Response = await fetch(
        `${PROD_API_URL}?sentence=${encodeURI(sentence)}`
      );
      const data: Response = await res.json();

      return Promise.resolve(data);
    } catch (err) {
      console.error('API error: ', err);
      alert('API error');

      return Promise.resolve({
        isBreakable: true,
        resultArray: [],
      });
    }
  }

  function getDisplayedResultArray(resultArray: string[]): DisplayedSymbol[] {
    let color: string = 'blue';

    return resultArray.map((symbol) => {
      const source: string | undefined = elements.find(
        (element) => element.symbol.toLowerCase() === symbol.toLowerCase()
      )?.source;
      const displayedSymbol: DisplayedSymbol = { symbol, color, source };

      if (symbol !== ' ') {
        color = color === 'red' ? 'blue' : 'red';
      }

      return displayedSymbol;
    });
  }

  function clear(): void {
    setSentence('');
    setResponse({
      isBreakable: true,
      resultArray: [],
    });
  }

  return (
    <section
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center gap-12',
        {
          'bg-zinc-700': isSending,
        }
      )}
    >
      <h1 className='h-auto w-screen animate-[fadeIn_3s] px-4 text-center text-6xl font-bold text-teal-500'>
        Periodic Table Speller
      </h1>
      <input
        className='h-16 w-3/5 rounded-lg p-4 text-2xl focus:outline-none max-[480px]:w-[320px]'
        value={sentence}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        disabled={isSending}
        autoFocus={true}
      />
      <div className='flex h-16 w-3/5 items-center overflow-auto whitespace-pre rounded-lg border-4 border-teal-500 px-4 text-2xl max-[480px]:w-[320px]'>
        {response.isBreakable ? (
          getDisplayedResultArray(response.resultArray).map(
            ({ symbol, color, source }, i) => (
              <a
                key={i}
                href={source ?? ''}
                target='_blank'
                className={clsx(
                  'animate-[fadeIn_0.5s] px-px font-bold hover:text-3xl',
                  {
                    'text-red-500': color === 'red',
                    'text-blue-500': color === 'blue',
                  }
                )}
              >
                {symbol}
              </a>
            )
          )
        ) : (
          <div className='font-bold text-red-500'>Not Breakable</div>
        )}
      </div>
      <button
        className='h-12 w-48 rounded-lg bg-teal-500 text-2xl font-bold text-white'
        onClick={clear}
      >
        Clear
      </button>
    </section>
  );
}
