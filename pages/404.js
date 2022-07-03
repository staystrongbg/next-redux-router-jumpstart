import Link from 'next/link';
import Layout from '@/components/Layout';

const Error = () => {
  return (
    <Layout title='Error 404'>
      <h1>No such page. </h1>
      <Link href='/'>
        <a
          style={{
            backgroundColor: 'black',
            color: 'beige',
            padding: '5px 10px',
            borderRadius: '4px',
          }}
        >
          go back
        </a>
      </Link>
    </Layout>
  );
};

export default Error;
