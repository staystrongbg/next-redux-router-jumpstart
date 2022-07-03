import Link from 'next/link';
import styles from '@/styles/Error.module.css';
const Error = ({ error }) => {
  return (
    <div className={styles.error}>
      <h1>Error</h1>
      <p>{error}</p>
      <Link href='/'>
        <a
          style={{
            color: 'beige',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '4px',
          }}
        >
          go back
        </a>
      </Link>
    </div>
  );
};

export default Error;
