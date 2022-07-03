import styles from '@/styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>This is footer</h3>
      <span className={styles.copyright}>2022 &copy; hexa</span>
    </footer>
  );
};

export default Footer;
