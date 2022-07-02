import Footer from './Footer';
import Navbar from './Navbar';
import styles from '@/styles/Main.module.css';
import Head from 'next/head';

const Layout = ({ children, title, keywords, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
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
Layout.defaultProps = {
  keywords: 'keywords are accepted as props',
  description: 'description is accepted as props',
};
