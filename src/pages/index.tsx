import axios from 'axios';
import { Main } from 'containers';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const balance = await axios.get(`http://61.97.184.99/balance`);
  const account = await axios.get(`http://61.97.184.99/account`);

  return {
    props: {
      balanceData: balance.data,
      accountData: account.data.slice(0, 2),
    },
  };
}

export default Main;
