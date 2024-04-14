import { NextResponse } from 'next/server';

interface Res {
  isBreakable: Boolean;
  elementsArray: string[];
}

export async function GET() {
  const res = breakSentence('');

  return NextResponse.json(res);
}

function breakSentence(sentence: string): Res {
  const res = {
    isBreakable: false,
    elementsArray: [],
  };

  return res;
}
