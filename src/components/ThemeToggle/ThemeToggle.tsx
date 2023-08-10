'use client';

import Sun from '@/../public/sun-icon.svg';
import Moon from '@/../public/moon-icon.svg';

import React, { useContext } from 'react';
import styles from './themeToggle.module.scss';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.themeToggle} ${styles[activeTheme]}`} onClick={toggleTheme}>
      <div className={`${styles.icon} ${styles.sun} ${styles[activeTheme]}`}>
        <Sun />
      </div>
      <div className={`${styles.icon} ${styles.moon} ${styles[activeTheme]}`}>
        <Moon />
      </div>
      <div className={`${styles.toggler} ${styles[activeTheme]}`} />
    </div>
  );
};

export default ThemeToggle;
