import { BsSearch } from 'react-icons/bs';
import { Button, Container, ContainerInput } from './style';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <ContainerInput>
    <BsSearch size={20} />
    <input
     type="search"
     onChange={data.onChange}
     placeholder={data.placeholder}
    />
   </ContainerInput>
   <Button type="button" onClick={data.onClick}>
    <BsSearch size={20} />
    Buscar
   </Button>
  </Container>
 );
}
