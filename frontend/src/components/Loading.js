import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles/Loading.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

function Loading() {
  return ReactDOM.createPortal(
    <div className="loading-overlay">
      <div className="loading-container">
        <ThemeProvider theme={theme}>
          <CircularProgress size={75} />
        </ThemeProvider>
      </div>
    </div>,
    document.querySelector('body'),
  );
}

export default Loading;