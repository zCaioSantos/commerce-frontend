import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container, Select, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <Title>Dados Pessoais</Title>
   <InputText
    data={{
     placeholder: 'Nome',
     type: 'text',
     register: register('nome'),
    }}
   />
   <InputText
    data={{
     placeholder: 'E-mail',
     type: 'email',
     register: register('email'),
    }}
   />
   <InputText
    data={{
     placeholder: 'CPF',
     type: 'text',
     register: register('cpf'),
    }}
   />
   <InputText
    data={{
     placeholder: 'Telefone',
     type: 'text',
     register: register('telefone'),
    }}
   />

   <Select {...register('genero')}>
    <option value="Masculino">Masculino</option>
    <option value="Feminino">Feminino</option>
    <option value="Outro">Outro</option>
   </Select>

   <InputText
    data={{
     placeholder: 'Data Nascimento',
     type: 'date',
     register: register('data_nascimento'),
    }}
   />
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
