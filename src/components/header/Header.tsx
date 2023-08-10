'use client';

import Image from 'next/image';
import styles from './header.module.scss';
import WebsiteLogo from '@/../public/website-logo.png';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Image src={WebsiteLogo} alt="Website Logo" fill={true} />
        </div>
        <ThemeToggle />
        <div className={styles.headerBurger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
