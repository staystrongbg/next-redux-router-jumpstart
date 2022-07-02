import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const STYLES_NAV = { width: '100%' };
const Navigation = ({ children, s }) => {
  return <nav style={{ ...STYLES_NAV, ...s }}>{children}</nav>;
};
const Navbar = () => {
  const router = useRouter();
  const [activelink, setActivelink] = useState('');

  useEffect(() => {
    setActivelink(router.asPath);
  }, [router.asPath]);

  const links = [
    { a: '/', link: 'home' },
    { a: '/about', link: 'about' },
    { a: '/contact', link: 'contact' },
    { a: '/webdev', link: 'webdev' },
    { a: '/graphics', link: 'graphics' },
  ];

  return (
    <Navigation>
      <ul className={styles.navbar}>
        {links.map((link, idx) => (
          <li
            className={`${
              activelink === link.a ? styles.active : styles['not-active']
            }`}
            key={idx}
          >
            <Link href={link.a}>
              <a>{link.link.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Navbar;
