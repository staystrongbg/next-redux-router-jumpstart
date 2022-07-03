import Link from 'next/link';
import Layout from '@/components/Layout';
import Err from '@/components/Error';
const Error = () => {
  return (
    <Layout title='Error 404'>
      <Err error=' 404 Error: Sorry, no such page...' />
    </Layout>
  );
};

export default Error;
