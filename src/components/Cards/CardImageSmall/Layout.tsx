import { BsXLg } from 'react-icons/bs';
import { ButtonClose, Container, ContainerImg } from './styles';
import { LayoutProps } from './types';

export function Layout({ data, onClick }: LayoutProps) {
 return (
  <Container>
   {data?.map((img) => (
    <ContainerImg key={img.imagem_id}>
     <ButtonClose type="button" onClick={() => onClick(img.imagem_id)}>
      <BsXLg />
     </ButtonClose>
     <img src={`/src/assets/images/${img.url}`} alt={`Imagem: ${img.url}`} />
    </ContainerImg>
   ))}
  </Container>
 );
}
