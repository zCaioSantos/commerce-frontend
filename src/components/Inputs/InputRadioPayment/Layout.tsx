import { Container } from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <Container
   htmlFor={data.method.label}
   onChange={() => data?.onChange(data.method?.value || 0)}
  >
   <input
    type="radio"
    id={data.method.label}
    value={
     data.method.value
      ? data.method.value
      : data.method.label
         .toUpperCase()
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...data.register}
   />
   {data.method.icon}
   {data.method.label}
  </Container>
 );
}
