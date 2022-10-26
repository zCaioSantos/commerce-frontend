import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Routers } from './router';
import { Container, Main } from './styles.app';

export function App() {
 const location = useLocation();
 const routes = ['/login', '/esqueci-minha-senha'];
 const isExternalRoute = routes.includes(location.pathname);
 return (
  <Container>
   {isExternalRoute ? null : <Sidebar />}
   <Main>
    {isExternalRoute ? null : <Header />}
    <Routers />
   </Main>
  </Container>
 );
}
