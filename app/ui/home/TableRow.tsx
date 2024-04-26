import clsx from 'clsx';

interface Props {
  elements: { symbol: string; number: number }[];
}

export default function TableRow({ elements }: Props) {
  return (
    <div className='flex h-[20px] w-[360px] min-[480px]:h-[26px] min-[480px]:w-[468px] min-[768px]:h-[42px] min-[768px]:w-[756px] min-[1024px]:h-[56px] min-[1024px]:w-[1008px]'>
      {elements.map(({ symbol, number }, i) => (
        <div
          key={i}
          className={clsx(
            'relative flex h-[20px] w-[20px] items-center justify-center text-[8px] font-bold text-white min-[480px]:h-[26px] min-[480px]:w-[26px] min-[480px]:text-[10.4px] min-[768px]:h-[42px] min-[768px]:w-[42px] min-[768px]:text-[16.8px] min-[1024px]:h-[56px] min-[1024px]:w-[56px] min-[1024px]:text-[22.4px]',
            {
              'bg-teal-500': number > 0,
            }
          )}
        >
          {symbol}
          {number > 0 && (
            <div className='absolute left-[1px] top-[1px] hidden text-[8px] min-[768px]:block'>
              {number}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
