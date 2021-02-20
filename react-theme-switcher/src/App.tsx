import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
