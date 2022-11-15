import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { Button } from "../../Button";
import { Amount, Btn, Container, Content, Shipping, Title, Value } from "./styles";

export function Layout() {
 return (
  <Container>
   <Title>
    <BsReverseLayoutTextWindowReverse size={26}/>
    <h5>Resumo</h5>
   </Title>
   <Value>
    <p>Valor do carrinho:</p> 
    <p>R$ 671,78</p>
   </Value>
   <Content>
    <Shipping>
    <p>Frete:</p> 
    <p>R$ 14,90</p>
    </Shipping>
    <Amount>
    <p>Total a prazo:</p> 
    <div>R$ 686,68</div>
    </Amount>
   <Btn>
    <Button data={{
     title: "IR AO PAGAMENTO",
     type: 'button'
    }} />
    <Button data={{
     title: "CONTINUAR COMPRANDO",
     type: 'button'
     }} />
   </Btn>
   </Content>
  </Container>
 );
}
