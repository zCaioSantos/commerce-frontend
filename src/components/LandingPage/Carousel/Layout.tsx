import { Container, Carrossel, Item, Capa, Info, Desc, Category, Price } from "./styles";
import {AppleWatch, Iphone, Macbook, Mouse, Tablet} from "../../../assets/images"

export function Layout(){
 return(
  <Container>
   <Carrossel>
    <Item>
     <Capa src={Iphone} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Macbook} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Tablet} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={AppleWatch} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Iphone} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Iphone} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Iphone} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
    <Item>
     <Capa src={Iphone} alt="Iphone"></Capa>
     <Info>
      <Desc>MackBook Pro 6</Desc>
      <Category>Notbooks</Category>
      <Price>$1,049,99</Price>
     </Info>
    </Item>
   </Carrossel>
  </Container>
 );
}