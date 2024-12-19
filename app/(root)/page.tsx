import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Vatsal' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn.firstName || 'Guest'}
            subtext='Access or manage your account and transactions efficiently with our secure online banking services.'
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1252.5} />
        </header>
      </div>
    </section>
  );
};

export default Home;
