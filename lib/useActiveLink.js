import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useNav = () => {
  const router = useRouter();

  const [activelink, setActivelink] = useState('');
  //a is pointing to the page with that name ofc *see useFetch*

  useEffect(() => {
    setActivelink(router.asPath);
  }, [router.asPath]);

  return { activelink };
};
export default useNav;
