import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardAndress } from '../../components/Cards/CardAndress';
import { InputRadioPayment } from '../../components/Inputs/InputRadioPayment';
import { mocks } from './mocks';
import {
 AndressContainer,
 Container,
 ErrrorMessage,
 MethodContainer,
 Title,
 WarnAndress,
} from './styles';
import { LayoutProps } from './type';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, errors },
  setFrete,
 },
 listAndress,
}: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container onSubmit={() => handleSubmit(onSubmit)}>
   <MethodContainer>
    <Title>Forma de Pagamento</Title>
    {mocks.paymentMethods.map((method) => (
     // eslint-disable-next-line react/jsx-props-no-spreading
     <InputRadioPayment
      key={method.label}
      data={{
       method,
       register: register('metodo_pagamento', {
        required: {
         value: true,
         message: 'Informe o metodo de pagamento',
        },
       }),
       onChange: () => null,
      }}
     />
    ))}
   </MethodContainer>
   <ErrrorMessage>{errors.metodo_pagamento?.message}</ErrrorMessage>
   <AndressContainer>
    <Title>Endereço de entrega</Title>
    {!listAndress.response?.content.length && (
     <WarnAndress>
      <strong>
       Você não possui um endereço cadastrado, por favor cadastre um na tela de
       perfil!
      </strong>
      <Button
       data={{
        title: 'Cadastrar endereço',
        type: 'button',
        onClick: () => navigate('/profile'),
       }}
      />
     </WarnAndress>
    )}
    {listAndress?.response &&
     listAndress.response?.content.map((andress) => (
      <CardAndress
       data={{
        andress,
        register: register('endereco_id', {
         required: {
          value: true,
          message: 'Selecione um endereço de entrega.',
         },
        }),
       }}
      />
     ))}

    <ErrrorMessage>{errors.endereco_id?.message}</ErrrorMessage>
   </AndressContainer>
   <MethodContainer>
    <Title>Forma de Pagamento</Title>
    {mocks.shipping.map((method) => (
     // eslint-disable-next-line react/jsx-props-no-spreading
     <InputRadioPayment
      key={method.label}
      data={{
       onChange: setFrete,
       method,
       register: register('valor_frete', {
        required: {
         value: true,
         message: 'Selecione uma forma de entrega.',
        },
       }),
      }}
     />
    ))}
   </MethodContainer>
   <ErrrorMessage>{errors.valor_frete?.message}</ErrrorMessage>
  </Container>
 );
}
