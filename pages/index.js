import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import useFetch from '@/lib/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
