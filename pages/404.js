import Link from 'next/link';
import Layout from '@/components/Layout';

const Error = () => {
  return (
    <Layout title='Error 404'>
      <h1>No such page. </h1>
      <Link href='/'>go back</Link>
    </Layout>
  );
};

export default Error;
