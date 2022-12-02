import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container, ErrrorMessage, Select, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading, errors },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <Title>Dados Pessoais</Title>
   <InputText
    data={{
     placeholder: 'Nome',
     type: 'text',
     register: register('nome', {
      required: {
       value: true,
       message: 'Informe seu nome.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.nome?.message}</ErrrorMessage>

   <InputText
    data={{
     placeholder: 'E-mail',
     type: 'email',
     register: register('email', {
      required: {
       value: true,
       message: 'Informe um e-mail.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.email?.message}</ErrrorMessage>
   <InputText
    data={{
     placeholder: 'CPF',
     type: 'text',
     register: register('cpf', {
      required: {
       value: true,
       message: 'Informe o CPF.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.cpf?.message}</ErrrorMessage>
   <InputText
    data={{
     placeholder: 'Telefone',
     type: 'text',
     register: register('telefone', {
      required: {
       value: true,
       message: 'Informe um telefone.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.telefone?.message}</ErrrorMessage>

   <Select {...register('genero')}>
    <option value="Masculino">Masculino</option>
    <option value="Feminino">Feminino</option>
    <option value="Outro">Outro</option>
   </Select>

   <InputText
    data={{
     placeholder: 'Data Nascimento',
     type: 'date',
     register: register('data_nascimento', {
      required: {
       value: true,
       message: 'Informe a data de nascimento',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.data_nascimento?.message}</ErrrorMessage>

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
