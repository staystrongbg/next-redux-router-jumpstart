import styles from '@/styles/Error.module.css';
const Error = ({ error }) => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>{error}</p>
    </div>
  );
};

export default Error;
