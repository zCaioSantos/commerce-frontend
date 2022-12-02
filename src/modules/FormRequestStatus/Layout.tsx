/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '../../components/Button';
import { Container, Select, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={handleSubmit(onSubmit)}>
   <Title>Editando Status Pedido</Title>
   <Select {...register('status_pedido')}>
    <option value="AGUARDANDO_PAGAMENTO">AGUARDANDO_PAGAMENTO</option>
    <option value="PAGAMENTO_REJEITADO">PAGAMENTO_REJEITADO</option>
    <option value="PAGAMENTO_SUCESSO">PAGAMENTO_SUCESSO</option>
    <option value="AGUARDANDO_RETIRADA">AGUARDANDO_RETIRADA</option>
    <option value="EM_TRANSITO">EM_TRANSITO</option>
    <option value="ENTREGUE">ENTREGUE</option>
   </Select>
   <Button
    data={{
     title: 'Salvar',
     type: 'submit',
     disabled: isLoading,
    }}
   />
  </Container>
 );
}
