import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button';
import { ContainerBanner, MaxButton } from '../Banner/styles';
import { mocks } from './mocks';

export function Layout() {
 const navigate = useNavigate();
 return (
  <ContainerBanner>
   <h2>{mocks.subtitle}</h2>
   <h1>{mocks.title}</h1>
   <h3>{mocks.message}</h3>
   <MaxButton>
    <Button
     data={{
      title: 'Saiba mais',
      type: 'button',
      onClick: () => navigate('/produtos'),
     }}
    />
   </MaxButton>
  </ContainerBanner>
 );
}
