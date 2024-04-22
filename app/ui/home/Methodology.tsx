export default function Methodology() {
  return (
    <section className='min-h-screen w-screen pt-8 text-center'>
      <h2 className='w-screen text-center text-5xl font-bold text-white'>
        How It Works
      </h2>
      <p className='mx-auto max-w-screen-lg p-8 text-left text-xl font-bold text-white'>
        The algorithm behind Periodic Table Speller is inspired by
        <a
          href='https://leetcode.com/problems/word-break/description/'
          target='_blank'
          className='text-blue-600'
        >
          LeetCode 139. Word Break.
        </a>
        &nbsp;1D dynamic programming is applied to break a sentence into
        chemical elements if possible. wordDict in Word Break is replaced by 118
        chemical elements and whitespace. Whitespace is included to preserve
        sentence's format.
      </p>
    </section>
  );
}
