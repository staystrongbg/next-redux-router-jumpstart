import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
const RequestedPage = () => {
  const router = useRouter();
  const page = router.query.url;
  return (
    <Layout title={page}>
      <h1>{page}</h1>
    </Layout>
  );
};

export default RequestedPage;
