import Footer from './Footer';
import Navbar from './Navbar';
import styles from '@/styles/Main.module.css';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
