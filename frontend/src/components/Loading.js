import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from '@mui/material/CircularProgress';

import './styles/Loading.css'

function Loading() {
  return ReactDOM.createPortal(
    <div className="loading-overlay">
      <div className="loading-container">
        <CircularProgress />
      </div>
    </div>,
    document.querySelector('body'),
  );
}

export default Loading;