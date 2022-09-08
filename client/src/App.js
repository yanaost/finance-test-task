import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { Settings } from './components/Settings';
import { TickersList } from './components/TickersList';

import './App.css';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 18,
      }}
    >
      <header>
        <Typography variant="h2" style={{ color: '#80CBC4', margin: '5' }}>finance test task</Typography>
      </header>
      <Settings />
      <TickersList />
    </Box>
  );
}

export default App;
