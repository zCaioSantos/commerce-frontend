import { Button } from '../../Button';
import { Actions, ControlBtn, Details, Infos } from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <Details>
   <Infos>
    <h2>{data.content?.nome}</h2>
    <h1>R${data.content?.preco}</h1>
    <p>{data.content?.descricao}</p>
   </Infos>
   <Actions>
    <ControlBtn>
     <Button
      data={{
       title: 'Adicionar o carrinho',
       type: 'button',
      }}
     />
    </ControlBtn>
   </Actions>
  </Details>
 );
}
