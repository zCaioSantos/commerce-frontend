import { Button } from '../Button';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data, onClick }: LayoutProps) {
 return (
  <Container>
   <div className="title">
    <span>{data.icon}</span>
    <strong>{data.pageName}</strong>
   </div>

   <div className="button">
    <Button
     data={{
      title: `Novo ${data.pageName}`,
      type: 'button',
      onClick: onClick,
     }}
    />
   </div>
  </Container>
 );
}
