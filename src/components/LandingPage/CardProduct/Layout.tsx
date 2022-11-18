import { CardContainer, Image, Price, Title } from './styles';
import { LayotProps } from './type';

export function Layout({ data }: LayotProps) {
 console.log(data);
 return (
  <CardContainer onClick={data.navigate}>
   {data.image ? (
    <Image src={`data:image/png;base64, ${data.image}`} />
   ) : (
    <Image src="https://static.cdnlive.com.br/uploads/602/produto/16668782795283_zoom.jpg" />
   )}

   <Title>{data.nome}</Title>
   <Price>R${data.preco}</Price>
  </CardContainer>
 );
}
