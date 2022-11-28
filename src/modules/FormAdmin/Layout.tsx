/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ContainerFlex, ContainerForm, InputRadio, RadioButton } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading },
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
     register: register('nome'),
    }}
   />

   <InputText
    data={{
     type: 'email',
     placeholder: 'E-mail',
     register: register('email'),
    }}
   />
   <InputText
    data={{
     type: 'password',
     placeholder: 'Senha',
     register: register('senha'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'CPF',
     register: register('cpf'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Telefone',
     register: register('telefone'),
    }}
   />

   <InputText
    data={{
     type: 'date',
     placeholder: 'Data Nascimento',
     register: register('data_nascimento'),
    }}
   />

   <ContainerFlex>
    <RadioButton htmlFor="admin">
     Admin
     <InputRadio
      {...register('perfil')}
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
