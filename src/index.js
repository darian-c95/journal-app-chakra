import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/indice'

import './theme/styles.css'
 
import { JournalEntries } from './components/notes/JournalEntries';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode> 
    <ChakraProvider theme={theme}>
      <JournalEntries /> 
    </ChakraProvider>
  </React.StrictMode>
);