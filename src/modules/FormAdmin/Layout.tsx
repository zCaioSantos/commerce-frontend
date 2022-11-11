/* eslint-disable react/jsx-props-no-spreading */
import {
 UseFormRegister,
 UseFormHandleSubmit,
 FieldErrorsImpl,
 Control,
 Controller,
 UseFormSetValue,
 UseFormGetValues,
} from 'react-hook-form';
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ContainerForm } from './style';
import { FormData } from './types';

interface LayoutProps {
 data: {
  hookForm: {
   control: Control<FormData, any>;
   register: UseFormRegister<FormData>;
   handleSubmit: UseFormHandleSubmit<FormData>;
   errors: Partial<FieldErrorsImpl<FormData>>;
   onSubmit: (data: any) => void;
   setValue: UseFormSetValue<FormData>;
   getValues: UseFormGetValues<FormData>;
  };
 };
}

export function Layout({
 data: {
  hookForm: { register, handleSubmit, errors, control, onSubmit, setValue },
 },
}: LayoutProps) {
 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
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
    defaultValue=""
   />
   <span>{errors?.nome?.message}</span>
   <Button
    data={{
     title: 'Cadastrar',
     type: 'submit',
    }}
   />
  </ContainerForm>
 );
}
