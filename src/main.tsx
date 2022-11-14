import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import queryClient from './services/api/queryClient';
import { GlobalStyle } from './styles';
import { ThemeProvider } from './styles/theme';
import { Slide, ToastContainer } from 'react-toastify';

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
      closeOnClick={true}
      limit={3}
     />
    </BrowserRouter>
   </ThemeProvider>
  </QueryClientProvider>
 </React.StrictMode>
);
