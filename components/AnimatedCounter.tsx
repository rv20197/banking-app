'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <section className='w-full'>
      <CountUp end={amount} duration={1} decimal='.' prefix='$' decimals={2}/>
    </section>
  );
};

export default AnimatedCounter;
