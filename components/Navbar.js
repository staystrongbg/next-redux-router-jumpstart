import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import useNav from '@/lib/useNav';
const STYLES_NAV = { width: '100%' };
const Navigation = ({ children, s }) => {
  return <nav style={{ ...STYLES_NAV, ...s }}>{children}</nav>;
};
const Navbar = () => {
  const { activelink, links } = useNav();
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
              <a>{link.name.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Navbar;
