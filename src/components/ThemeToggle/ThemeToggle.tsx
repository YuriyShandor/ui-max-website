'use client';

import React, { useContext } from 'react';
import styles from './themeToggle.module.scss';
import { LIGHT_THEME, ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={activeTheme === LIGHT_THEME ? { left: '2px' } : { right: '2px' }}
      />
      {activeTheme}
    </div>
  );
};

export default ThemeToggle;
