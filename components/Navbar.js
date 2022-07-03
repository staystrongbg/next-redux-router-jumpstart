import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import useNav from '@/lib/useNav';
import { Navigation } from '@/lib/styledComponents';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const fsNavigation = useSelector((state) => state.fsNavigation);
  const dispatch = useDispatch();
  const { activelink, links } = useNav();
  // const [showNavigation, setShowNavigation] = useState(false);
  return (
    <Navigation>
      <span
        className={styles.menu}
        onClick={() =>
          dispatch({ type: 'FS_NAVIGATION', payload: !fsNavigation })
        }
      >
        <svg
          clipRule='evenodd'
          fillRule='evenodd'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z'
            fillRule='nonzero'
          />
        </svg>
      </span>
      <ul
        className={`${styles.navbar} ${fsNavigation && styles['show-hide']} `}
      >
        {links.map((link, idx) => (
          <li
            onClick={() => dispatch({ type: 'FS_NAVIGATION', payload: false })}
            className={`${
              activelink === link.a ? styles.active : styles['not-active']
            }`}
            key={idx}
          >
            <Link href={link.a}>
              <a>{link.name.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Navbar;
