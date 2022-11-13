import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import queryClient from './services/api/queryClient';
import { GlobalStyle } from './styles';
import { ThemeProvider } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <ThemeProvider>
    <BrowserRouter>
     <App />
     <GlobalStyle />
    </BrowserRouter>
   </ThemeProvider>
  </QueryClientProvider>
 </React.StrictMode>
);
