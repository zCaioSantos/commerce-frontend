import { CardContainer, Price, Title, Image } from './styles';
import { LayotProps } from './type';

export function Layout({ data }: LayotProps) {
 return (
  <CardContainer onClick={data.navigate}>
   <Image src="https://static.cdnlive.com.br/uploads/602/produto/16668782795283_zoom.jpg" />
   <Title>{data.nome}</Title>
   <Price>R${data.preco}</Price>
  </CardContainer>
 );
}
