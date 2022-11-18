/* eslint-disable react/jsx-props-no-spreading */
import { Controller } from 'react-hook-form';
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ContainerFlex, ContainerForm, InputRadio, RadioButton } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, control, onSubmit, setValue },
 },
 selectedAdmin,
}: LayoutProps) {
 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <strong>Formulario de {!selectedAdmin?.id ? 'Cadastro' : 'Edição'}</strong>
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'text',
       placeholder: 'Nome',
       getInputValue(e) {
        setValue('nome', e);
       },
       value: selectedAdmin?.nome,
      }}
      {...register('nome', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue={selectedAdmin?.nome}
   />
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'text',
       placeholder: 'E-mail',
       getInputValue(e) {
        setValue('email', e);
       },
       value: selectedAdmin?.email,
      }}
      {...register('email', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue=""
   />
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'password',
       placeholder: 'Senha',
       getInputValue(e) {
        setValue('senha', e);
       },
       value: selectedAdmin?.senha,
      }}
      {...register('senha', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue=""
   />
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'text',
       placeholder: 'CPF',
       getInputValue(e) {
        setValue('cpf', e);
       },
       value: selectedAdmin?.cpf,
      }}
      {...register('cpf', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue=""
   />
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'text',
       placeholder: 'Telefone',
       getInputValue(e) {
        setValue('telefone', e);
       },
       value: selectedAdmin?.telefone,
      }}
      {...register('telefone', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue=""
   />
   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'date',
       placeholder: 'Data Nascimento',
       getInputValue(e) {
        setValue('data_nascimento', e);
       },
       value: selectedAdmin?.data_nascimento,
      }}
      {...register('data_nascimento', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="nome"
    defaultValue=""
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
    }}
   />
  </ContainerForm>
 );
}
