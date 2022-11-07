import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { Container, Icons, Div, Sec } from "./styles";


export function Layout(){
 return(
  <Container>
   <Sec>
    <Icons>
     <BsTwitter color="F79F7C" size={36}/>
     <BsFacebook color="F79F7C" size={36}/>
     <BsTelegram color="F79F7C" size={36}/>
     <BsInstagram color="F79F7C" size={36}/>
    </Icons>
    <Div>Siga nos também nas redes sociais</Div>
   </Sec>
  </Container>
 );
}