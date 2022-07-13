import React from 'react'; 
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; 
import '../src/theme/index.css';

import { JournalApp } from './JournalApp';
 

const container = document.getElementById('root');
const root = createRoot(container);

root.render( 
  <ChakraProvider> 
    <JournalApp /> 
  </ChakraProvider>  
);