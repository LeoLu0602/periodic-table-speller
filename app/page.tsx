'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface Response {
  isBreakable: Boolean;
  resultArray: string[];
}

interface displayedSymbol {
  symbol: string;
  color: string;
}

export default function Home() {
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
        setResponse({
          isBreakable: true,
          resultArray: [],
        });
        return;
      }

      setIsSending(true);

      try {
        setResponse(await sendSentence(sentence));
      } catch (err) {
        console.error('API error: ', err);
      }

      setIsSending(false);
    }
  }

  async function sendSentence(sentence: string): Promise<Response> {
    const apiUrl: string = `https://periodic-table-speller.vercel.app/api/break-sentence-to-elements?sentence=${encodeURI(sentence)}`;

    try {
      const res: globalThis.Response = await fetch(apiUrl);
      const data: Response = await res.json();

      return data;
    } catch (err) {
      console.error('API error: ', err);

      return {
        isBreakable: false,
        resultArray: [],
      };
    }
  }

  function getDisplayedResultArray(resultArray: string[]): displayedSymbol[] {
    let color: string = 'blue';

    return resultArray.map((symbol) => {
      if (symbol !== ' ') {
        color = color === 'red' ? 'blue' : 'red';
      }

      return {
        symbol,
        color,
      };
    });
  }

  return (
    <div
      className={clsx(
        'flex min-h-screen w-screen flex-col items-center justify-center gap-12',
        {
          'bg-green-400': !isSending,
          'bg-orange-400': isSending,
        }
      )}
    >
      <div className='h-auto w-11/12 text-center text-6xl font-bold text-white'>
        Periodic Table Speller
      </div>
      <input
        className='h-16 w-3/5 rounded-lg p-4 text-2xl shadow-2xl focus:outline-none max-[480px]:w-[320px]'
        value={sentence}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        disabled={isSending}
      />
      <div
        className={clsx(
          'flex h-16 w-3/5 items-center overflow-auto whitespace-pre rounded-lg px-4 text-2xl shadow-2xl max-[480px]:w-[320px]',
          {
            'bg-green-300': !isSending,
            'bg-orange-300': isSending,
          }
        )}
      >
        {response.isBreakable ? (
          getDisplayedResultArray(response.resultArray).map(
            ({ symbol, color }, i) => (
              <div
                key={i}
                className={clsx('font-bold', {
                  'text-red-500': color === 'red',
                  'text-blue-500': color === 'blue',
                })}
              >
                {symbol}
              </div>
            )
          )
        ) : (
          <div className='font-bold text-red-500'>Not Breakable</div>
        )}
      </div>
    </div>
  );
}
