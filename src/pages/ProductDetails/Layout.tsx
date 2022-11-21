import { useState } from 'react';
import { RingLoader } from 'react-spinners';
import { Button } from '../../components/Button';
import { StepperInput } from '../../components/Inputs/StepperInput';
import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { useCartShop } from '../../services/context/ShopCart/hook';
import {
 Capa,
 Container,
 Content,
 Description,
 ImagemContainer,
 ImagemList,
 InfoProduct,
 Name,
 NameCommerce,
 OptionContainer,
 Price,
} from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 const { onAddToCart } = useCartShop();
 const [quantidade, setQuantidade] = useState(1);
 return (
  <Container>
   <TopHeader />
   <Header />
   <Content>
    {data.isFetched || !data.isLoading ? (
     <>
      <ImagemContainer>
       <Capa>
        <img
         src={`/src/assets/images/${String(data.response?.imagens[0].url)}`}
         alt={`Imagem do Produto ${data.response?.nome}`}
        />
       </Capa>
       <ImagemList>
        {data.response?.imagens.map((image) => (
         <li key={image.imagem_id}>
          <img
           src={`/src/assets/images/${image.url}`}
           alt={`Imagem do Produto ${data.response?.nome}`}
          />
         </li>
        ))}
       </ImagemList>
      </ImagemContainer>
      <InfoProduct>
       <NameCommerce>Commerce Company</NameCommerce>
       <Name>{data.response?.nome}</Name>
       <Description>{data.response?.descricao}</Description>
       <Price>R${data.response?.preco}</Price>
       <OptionContainer>
        <StepperInput data={{ value: quantidade, onClick: setQuantidade }} />
        <Button
         data={{
          title: 'Adicionar ao carrinho',
          type: 'button',
          onClick: () => {
           onAddToCart({ ...data.response, quantidade });
          },
         }}
        />
       </OptionContainer>
      </InfoProduct>
     </>
    ) : (
     <RingLoader color="#F29773" />
    )}
   </Content>
   <Footer />
  </Container>
 );
}
