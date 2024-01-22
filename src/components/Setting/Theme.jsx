import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 5px 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ThemeLabel = styled.span`
  color: #333;
`;

const ThemeSwitcher = styled.input`
  cursor: pointer;
`;

const Theme = () => {
  const [theme, setTheme] = useState('light'); // Start with light theme by default

  // This effect will run when the `theme` state changes.
  useEffect(() => {
    // If the theme is 'dark', we add the 'dark-theme' class to the body
    // Otherwise, we remove it.
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]); // Dependencies array, re-run the effect when `theme` changes

  const toggleTheme = () => {
    // Set the new theme based on the previous theme state
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContainer>
      <ThemeLabel>Theme</ThemeLabel>
      <ThemeSwitcher
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
    </ThemeContainer>
  );
};

export default Theme;

