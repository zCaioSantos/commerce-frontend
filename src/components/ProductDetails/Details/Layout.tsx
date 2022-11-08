import {
 BsDashLg,
 BsPlusLg,
 BsStar,
 BsStarFill,
 BsStarHalf,
} from 'react-icons/bs';
import { Button } from '../../Button';
import { Actions, Background, ControlBtn, Details, Infos, Qtd, Stars } from './styles';

export function Layout() {
 return (
  <Background>
   <Details>
    <Infos>
     <h2>
      Headset JBL, Estereo, com Cancelamento de Ruído, Earpods de Couro
      Sintetico
     </h2>
     <Stars>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
     </Stars>
     <h2>R$ 314,99</h2>
    </Infos>
     <Actions>
      <Qtd>
       <BsPlusLg size={14} className="BsPlusLg"/>
       <h2>1</h2>
       <BsDashLg size={14} className="BsDashLg"/>
      </Qtd>
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
  </Background>
 );
}
