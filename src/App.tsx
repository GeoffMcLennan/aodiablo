import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterInputs } from './features/character/characterInputs';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { Randomizer } from './features/randomizer/randomizer';
import { History } from './features/history/history';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './features/header';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';

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
    fontFamily: '"Exocet Blizzard", "Formal436 BT"'
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <PersistGate loading={null} persistor={persistor}>
            <Container id='main-container' maxWidth='md'>
              <Container className='bordered-container-vertical sub-container'>
                <CharacterInputs />
                <Randomizer />
              </Container>
              <Container className='bordered-container-vertical sub-container'>
                <History />
              </Container>
            </Container>
          </PersistGate>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
