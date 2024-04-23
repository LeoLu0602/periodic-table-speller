import clsx from 'clsx';

interface Props {
  elements: { symbol: string; number: number }[];
}

export default function TableRow({ elements }: Props) {
  return (
    <div className='relative mb-1 flex h-[50px] w-[917px] gap-1 before:m-1 after:m-1'>
      {elements.map(({ symbol, number }) => (
        <div
          key={number}
          className={clsx(
            'relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center font-bold text-white',
            {
              'bg-teal-500': number > 0,
            }
          )}
        >
          {symbol}
          {number > 0 && (
            <div className='absolute left-[1px] top-[1px] text-[8px]'>
              {number}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
