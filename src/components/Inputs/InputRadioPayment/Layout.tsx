import { Container } from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <Container htmlFor={data.method.label}>
   <input
    type="radio"
    id={data.method.label}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...data.register}
    value={data.method.label.toUpperCase()}
   />
   {data.method.icon}
   {data.method.label}
  </Container>
 );
}
