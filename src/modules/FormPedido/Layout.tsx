import { CardAndress } from '../../components/Cards/CardAndress';
import { InputRadioPayment } from '../../components/Inputs/InputRadioPayment';
import { mocks } from './mocks';
import { AndressContainer, Container, MethodContainer, Title } from './styles';
import { LayoutProps } from './type';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit },
 },
 ListAndress,
}: LayoutProps) {
 return (
  <Container onSubmit={() => handleSubmit(onSubmit)}>
   <MethodContainer>
    <Title>Forma de Pagamento</Title>
    {mocks.paymentMethods.map((method) => (
     // eslint-disable-next-line react/jsx-props-no-spreading
     <InputRadioPayment
      data={{
       method,
       register: register('metodo_pagamento'),
      }}
     />
    ))}
   </MethodContainer>
   <AndressContainer>
    <Title>Endereço de entrega</Title>
    {ListAndress.response?.content.map((andress) => (
     <CardAndress
      data={{
       andress,
       register: register('endereco_id'),
      }}
     />
    ))}
   </AndressContainer>
  </Container>
 );
}
