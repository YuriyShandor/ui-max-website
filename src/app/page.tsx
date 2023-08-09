import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.heading}>Home Page</h1>
    </div>
  );
}
