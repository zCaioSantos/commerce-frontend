import { Container, Content } from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <Container htmlFor={data.andress.logradouro}>
   <input
    type="radio"
    id={data.andress.logradouro}
    value={data.andress.endereco_id}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...data.register}
   />
   <Content>
    <strong>
     {data.andress.logradouro}, {data.andress.numero}
    </strong>
    <span>
     CEP: {data.andress.cep} - {data.andress.cidade}, {data.andress.uf}
    </span>
   </Content>
  </Container>
 );
}
