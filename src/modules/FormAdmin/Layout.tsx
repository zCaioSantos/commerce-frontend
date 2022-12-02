/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import {
 ContainerFlex,
 ContainerForm,
 ErrrorMessage,
 InputRadio,
 RadioButton,
} from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading, errors },
 },
 selectedAdmin,
}: LayoutProps) {
 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <strong>Formulario de {!selectedAdmin?.id ? 'Cadastro' : 'Edição'}</strong>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Nome',
     register: register('nome', {
      required: {
       value: true,
       message: 'Informe um nome.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.nome?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'email',
     placeholder: 'E-mail',
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
     type: 'password',
     placeholder: 'Senha',
     register: register('senha', {
      required: {
       value: true,
       message: 'Informe uma senha.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.senha?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'CPF',
     register: register('cpf', {
      required: {
       value: true,
       message: 'Informe um CPF.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.cpf?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Telefone',
     register: register('telefone', {
      required: {
       value: true,
       message: 'Informe um telefone.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.telefone?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'date',
     placeholder: 'Data Nascimento',
     register: register('data_nascimento', {
      required: {
       value: true,
       message: 'Informe uma data de nascimento.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.data_nascimento?.message}</ErrrorMessage>

   <ContainerFlex>
    <RadioButton htmlFor="admin">
     Admin
     <InputRadio
      {...register('perfil', {
       required: {
        value: true,
        message: 'Selecione um perfil para o usuario.',
       },
      })}
      id="admin"
      type="radio"
      value="admin"
     />
    </RadioButton>

    <RadioButton htmlFor="estoquista">
     Estoquista
     <InputRadio
      {...register('perfil')}
      id="estoquista"
      type="radio"
      value="estoquista"
     />
    </RadioButton>
   </ContainerFlex>

   <ErrrorMessage>{errors.perfil?.message}</ErrrorMessage>

   <Button
    data={{
     title: !selectedAdmin?.id ? 'Cadastrar' : 'Salvar',
     type: 'submit',
     disabled: isLoading,
    }}
   />
  </ContainerForm>
 );
}
