'use client';

import Image from 'next/image';
import styles from './header.module.scss';
import WebsiteLogo from '@/../public/website-logo.png';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolling(window.scrollY > 80);
    });
  }, []);

  return (
    <div className={`${styles.header} header`}>
      <div className={`${styles.headerContainer} ${isScrolling ? styles['isScrolling'] : ''}`}>
        <div className={styles.headerLogo}>
          <Image src={WebsiteLogo} alt="Website Logo" fill={true} />
        </div>
        <div className={styles.headerButtons}>
          <ThemeToggle />
          <div className={styles.headerBurger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
