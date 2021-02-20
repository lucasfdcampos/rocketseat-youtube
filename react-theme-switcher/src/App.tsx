import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
