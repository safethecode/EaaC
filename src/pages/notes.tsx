import axios from 'axios';
import { Notes } from 'containers';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const account = await axios.get(`http://61.97.184.99/account`);

  return {
    props: {
      accountData: account.data,
    },
  };
}

export default Notes;
