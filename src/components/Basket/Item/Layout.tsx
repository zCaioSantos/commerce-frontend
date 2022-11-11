import { BsChevronLeft, BsChevronRight, BsTrashFill } from 'react-icons/bs';
import { Container, Desc, Imagem, Infos, ItensQtd, Prices, Product, Qtd, Remove } from './styles';

export function Layout() {
 return (
  <Container>
   <Product>
    <Imagem src="https://www.pngplay.com/wp-content/uploads/9/Keyboard-PNG-HD-Quality.png" alt="" />
    <Infos>
     <Desc>
      <h5>Teclado Mecânico Gamer GamaKay CK68 Black RGB, Switch Outemu Brown, US</h5>
      <small>Com desconto no PIX: <strong>R$ 215,95</strong></small>
      <small>Parcelado no caertão em até 12x sem juros: <strong>R$ 289,99</strong></small>
     </Desc >
     <Prices>
      <h6>Preço total à vista:</h6>
      <h5>R$ 335,89</h5>
      <ItensQtd>
       <Qtd>
        <BsChevronLeft size={15} />
        <p>1</p>
        <BsChevronRight size={15} color='#F79F7C'/>
       </Qtd>
       <Remove>
        <BsTrashFill size={15}/>
        <p>Remover</p>
       </Remove>
      </ItensQtd>
     </Prices>
    </Infos>
   </Product>
  </Container>
 );
}
