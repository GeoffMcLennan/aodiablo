import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterInputs } from './features/character/characterInputs';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { Randomizer } from './features/randomizer/randomizer';
import { History } from './features/history/history';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#afafaf'
    },
    secondary: {
      main: '#afafaf'
    }
  },
  typography: {
    allVariants: {
      color: '#afafaf',
    },
    fontFamily: '"Formal436 BT"'
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container>
            <CharacterInputs />
            <Randomizer />
            <History />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
