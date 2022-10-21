import { Button } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Button onClick={data.navigate} className={data.isActive ? 'active' : ''}>
   {data.icon}
  </Button>
 );
}
