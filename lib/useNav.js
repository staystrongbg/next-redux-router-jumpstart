import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useNav = () => {
  const router = useRouter();
  const [activelink, setActivelink] = useState('');
  const links = [
    { a: '/', name: 'home' },
    { a: '/about', name: 'about' },
    { a: '/contact', name: 'contact' },
    { a: '/webdev', name: 'webdev' },
    { a: '/graphics', name: 'graphics' },
    { a: '/custom', name: 'custom' },
  ];

  useEffect(() => {
    setActivelink(router.asPath);
  }, [router.asPath]);

  return { links, activelink };
};
export default useNav;
