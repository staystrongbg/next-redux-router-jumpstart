import Layout from '@/components/Layout';
import useFetch from '@/lib/useFetch';
import PacmanLoader from 'react-spinners/PacmanLoader';
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
      <Layout>
        <PacmanLoader />
      </Layout>
    );
  }
  return (
    <Layout>
      <p>{isError}</p>
    </Layout>
  );
};

export default RequestedPage;
