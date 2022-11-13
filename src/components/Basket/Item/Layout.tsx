import { BsChevronLeft, BsChevronRight, BsTrashFill } from 'react-icons/bs';
import { Amount, Container, DeleteButton, Description, Info } from './styles';

export function Layout() {
 return (
  <Container>
   <Info>
    <img
     src="https://www.pngplay.com/wp-content/uploads/9/Keyboard-PNG-HD-Quality.png"
     alt=""
    />
    <Description>
     <strong>Nome do produto</strong>
     <small>
      Preço total à vista:<span>R$ 335,89</span>
     </small>
    </Description>
   </Info>

   <div>
    <div>
     <Amount>
      <BsChevronLeft />
      <input type="number" />
      <BsChevronRight />
     </Amount>

     <DeleteButton>
      <BsTrashFill />
      Remover
     </DeleteButton>
    </div>
   </div>
  </Container>
 );
}
