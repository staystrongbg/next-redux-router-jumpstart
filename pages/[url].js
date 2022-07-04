import Error from '@/components/Error';
import Layout from '@/components/Layout';
import useFetch from '@/lib/useFetch';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Skeleton } from '@mui/material';
const RequestedPage = () => {
  const { data, page, loading, isError } = useFetch(process.env.URL);

  if (data && data[0]) {
    return (
      <Layout title={page}>
        <h1>{data[0].page}</h1>
        <p>{data[0].text}</p>
      </Layout>
    );
  }
  if (loading) {
    return (
      <Layout title='Loading...'>
        <Skeleton
          sx={{ bgcolor: '#ccff90', opacity: '0.1' }}
          width={500}
          height={200}
        />
        <Skeleton
          sx={{ bgcolor: '#ccff90', opacity: '0.1' }}
          width={310}
          height={50}
        />
      </Layout>
    );
  }
  return (
    <Layout title='404 page not found'>
      <Error error={isError} />
    </Layout>
  );
};

export default RequestedPage;
