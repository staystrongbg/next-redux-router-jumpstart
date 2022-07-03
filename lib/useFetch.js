import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useFetch = (url) => {
  const router = useRouter();
  const page = router.query.url;
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');
  // set URL in .env
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      //data to render
      .then((d) => setData(d.filter((d) => d.page === page)))
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(err.message);
      });
  }, [page]);

  return { data, router, page, loading, isError };
};
export default useFetch;
