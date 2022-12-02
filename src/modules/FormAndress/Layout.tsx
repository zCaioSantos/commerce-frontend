import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container, ErrrorMessage, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading, isEdit, errors },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <Title>{isEdit ? 'Editando Endereço' : 'Novo Endereço'}</Title>
   <InputText
    data={{
     placeholder: 'Logradouro',
     type: 'text',
     register: register('logradouro', {
      required: {
       value: true,
       message: 'Informe o logradouro.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.logradouro?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'Numero',
     type: 'number',
     register: register('numero', {
      required: {
       value: true,
       message: 'Informe o numero.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.numero?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'Complemento',
     type: 'text',
     register: register('complemento'),
    }}
   />
   <InputText
    data={{
     placeholder: 'Bairro',
     type: 'text',
     register: register('bairro', {
      required: {
       value: true,
       message: 'Informe um bairro',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.bairro?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'Cidade',
     type: 'text',
     register: register('cidade', {
      required: {
       value: true,
       message: 'Informe uma cidade.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.cidade?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'UF',
     type: 'text',
     register: register('uf', {
      required: {
       value: true,
       message: 'Informe a UF.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.uf?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'CEP',
     type: 'text',
     register: register('cep', {
      required: {
       value: true,
       message: 'Informe um CEP.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.cep?.message}</ErrrorMessage>

   <Button
    data={{
     title: isEdit ? 'Salvar' : 'Cadastrar',
     type: 'submit',
     disabled: isLoading,
    }}
   />
  </Container>
 );
}
