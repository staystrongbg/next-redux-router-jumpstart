import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  return (
    <Layout title='Home'>
      <h1>Homepage</h1>
      <p>
        <b>Welcome</b> | This is our homepage
      </p>
    </Layout>
  );
}
