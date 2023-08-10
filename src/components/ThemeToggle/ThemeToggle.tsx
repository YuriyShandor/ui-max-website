'use client';

import Sun from '@/../public/sun-icon.svg';
import Moon from '@/../public/moon-icon.svg';

import React, { useContext } from 'react';
import styles from './themeToggle.module.scss';
import { LIGHT_THEME, ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);
  console.log();

  return (
    <div className={`${styles.themeToggle} ${activeTheme}`} onClick={toggleTheme}>
      <div className={styles.icon}>
        <Sun />
      </div>
      <div
        className={styles.toggler}
        style={activeTheme === LIGHT_THEME ? { left: '2px' } : { right: '2px' }}
      />
      <div className={styles.icon}>
        <Moon />
      </div>
    </div>
  );
};

export default ThemeToggle;
