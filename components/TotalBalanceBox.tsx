import AnimatedCounter from './AnimatedCounter';

const TotalBalanceBox = ({
  accounts: [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>{/* DoughnutChart component */}</div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          {totalBanks} {totalBanks > 1 ? 'Bank Accounts' : 'Bank Account'}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance</p>
          <p className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
