'use client';

import React, { useContext } from 'react';
import styles from './themeToggle.module.scss';
import { LIGHT_THEME, ThemeContext } from '@/context/ThemeContext';
import { log } from 'console';

const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);
  console.log();
  

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <div className={styles.themeToggleIcon}>🌙</div>
      <div className={styles.themeToggleIcon}>🔆</div>
      <div
        className={styles.themeToggleBall}
        style={activeTheme === LIGHT_THEME ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default ThemeToggle;
