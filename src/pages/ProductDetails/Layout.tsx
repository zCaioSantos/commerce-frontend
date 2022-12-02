import { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
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
 Star,
} from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 const { onAddToCart } = useCartShop();
 const [quantidade, setQuantidade] = useState(1);
 const [capa, setCapa] = useState('');

 useEffect(() => {
  setCapa(String(data.response?.imagens[0].url));
 }, [data.response?.imagens]);

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
         src={`/src/assets/images/${capa}`}
         alt={`Imagem do Produto ${data.response?.nome}`}
        />
       </Capa>
       <ImagemList>
        {data.response?.imagens.map((image) => (
         <li
          key={image.imagem_id}
          onClick={() => setCapa(image.url)}
          className={capa === image.url ? 'select' : ''}
         >
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
       <Star>
        <BsStarFill color="#ffaf88" size={25} />
        <p>{data.response?.avaliacao}</p>
       </Star>
       <Price>
        {(data.response?.preco).toLocaleString('pr-br', {
         style: 'currency',
         currency: 'BRL',
        })}
       </Price>
       <OptionContainer>
        <StepperInput
         data={{
          value: quantidade,
          onClick: setQuantidade,
          max: data.response?.estoque,
         }}
        />
        <Button
         data={{
          title: 'Adicionar ao carrinho',
          type: 'button',
          onClick: () => {
           onAddToCart({ ...data.response, quantidade });
          },
          disabled: data.response?.estoque === 0,
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
