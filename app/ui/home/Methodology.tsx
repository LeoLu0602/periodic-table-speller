export default function Methodology() {
  return (
    <article className='h-auto w-screen'>
      <h2 className='w-screen text-center text-5xl font-bold text-teal-500'>
        How It Works
      </h2>
      <p className='p-8 text-left text-xl font-bold text-white'>
        The algorithm behind Periodic Table Speller is inspired by&nbsp;
        <a
          href='https://leetcode.com/problems/word-break/description/'
          target='_blank'
          className='text-teal-500'
        >
          LeetCode 139. Word Break
        </a>
        .&nbsp;1D dynamic programming is applied to break a sentence into
        chemical symbols if possible. wordDict in Word Break is set to an array
        of 118 chemical symbols and a whitespace. See&nbsp;
        <a
          href='https://github.com/LeoLu0602/periodic-table-speller'
          target='_blank'
          className='text-teal-500'
        >
          source code
        </a>
        &nbsp;to learn more about this project.
      </p>
    </article>
  );
}
