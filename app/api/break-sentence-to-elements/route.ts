import { NextResponse } from 'next/server';
import { elements } from './elements.js';

interface Response {
  isBreakable: Boolean;
  resultArray: string[];
}

export async function GET(request: Request): Promise<NextResponse<Response>> {
  const { searchParams }: { searchParams: URLSearchParams } = new URL(
    request.url
  );

  const symbols: string[] = elements.map((element) => element.symbol);
  const res: Response = breakSentenceToElements(searchParams.get('sentence'), [
    ...symbols,
    ' ',
  ]);

  return NextResponse.json(res);
}

function breakSentenceToElements(
  sentence: string | null,
  dictionary: string[]
): Response {
  if (!sentence) {
    return {
      isBreakable: false,
      resultArray: [],
    };
  }

  const sentenceLength = sentence.length;
  // dp[i].isBreakable = [is dp.slice(0, i) breakable]
  // dp[i].resultArray = dp[i].isBreakable ? [elements array] : []
  const dp: Response[] = new Array(sentenceLength + 1).fill({
    isBreakable: false,
    resultArray: [],
  });

  dp[0] = {
    isBreakable: true,
    resultArray: [],
  };

  for (let i = 1; i <= sentenceLength; i++) {
    for (const word of dictionary) {
      const wordLength: number = word.length;
      const suffix: string = sentence.slice(i - wordLength, i);

      if (
        suffix.toLowerCase() === word.toLowerCase() &&
        dp[i - wordLength]?.isBreakable
      ) {
        dp[i] = {
          isBreakable: true,
          resultArray: [...dp[i - wordLength].resultArray, suffix],
        };

        break;
      }
    }
  }

  return dp[sentenceLength];
}
