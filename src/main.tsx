import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { ThemeProvider } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
  <ThemeProvider>
   <BrowserRouter>
    <App />
    <GlobalStyle />
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);

