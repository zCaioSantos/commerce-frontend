import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading, isEdit },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <Title>{isEdit ? 'Editando Endereço' : 'Novo Endereço'}</Title>
   <InputText
    data={{
     placeholder: 'Logradouro',
     type: 'text',
     register: register('logradouro'),
    }}
   />
   <InputText
    data={{
     placeholder: 'Numero',
     type: 'number',
     register: register('numero'),
    }}
   />
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
     register: register('bairro'),
    }}
   />
   <InputText
    data={{
     placeholder: 'Cidade',
     type: 'text',
     register: register('cidade'),
    }}
   />
   <InputText
    data={{
     placeholder: 'UF',
     type: 'text',
     register: register('uf'),
    }}
   />
   <InputText
    data={{
     placeholder: 'CEP',
     type: 'text',
     register: register('cep'),
    }}
   />
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
