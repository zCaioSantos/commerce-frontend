import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { App } from './App';
import queryClient from './services/api/queryClient';
import { GlobalStyle } from './styles';
import { ThemeProvider } from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <ThemeProvider>
    <BrowserRouter>
     <App />
     <GlobalStyle />
     <ToastContainer
      position="bottom-right"
      transition={Slide}
      closeOnClick
      limit={3}
     />
    </BrowserRouter>
   </ThemeProvider>
  </QueryClientProvider>
 </React.StrictMode>
);
