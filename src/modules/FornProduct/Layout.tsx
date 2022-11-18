/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { BsImage } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ContainerForm, InputFileContainer } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, control, onSubmit, setValue },
 },
 onSetImg,
}: LayoutProps) {
 const [listaImgs, setListaImgs] = useState<File[]>([]);
 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <strong>Formulario de </strong>

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

   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'text',
       placeholder: 'Descrição',
       getInputValue(e) {
        setValue('descricao', e);
       },
      }}
      {...register('descricao', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="descricao"
    defaultValue=""
   />

   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'number',
       placeholder: 'Avaliação',
       getInputValue(e) {
        setValue('avaliacao', e);
       },
      }}
      {...register('avaliacao', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="avaliacao"
    defaultValue=""
   />

   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'number',
       placeholder: 'Estoque',
       getInputValue(e) {
        setValue('estoque', e);
       },
      }}
      {...register('estoque', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="estoque"
    defaultValue=""
   />

   <Controller
    render={({ field }) => (
     <InputText
      {...field}
      data={{
       type: 'number',
       placeholder: 'Preço',
       getInputValue(e) {
        setValue('preco', e);
       },
      }}
      {...register('preco', {
       required: {
        value: true,
        message: 'Error',
       },
      })}
     />
    )}
    control={control}
    name="preco"
    defaultValue=""
   />

   <InputFileContainer>
    <label htmlFor="image">
     <BsImage size={25} />
     Clique para escolher a imagem do produto
     <input
      onChange={(e) => {
       setListaImgs([e.target.files[0]]), onSetImg(e.target.files[0]);
      }}
      id="image"
      accept="image/png"
      type="file"
     />
     {listaImgs.length > 0 && (
      <span>
       <b>Imagem selecionada:</b> {listaImgs[0].name}
      </span>
     )}
    </label>
   </InputFileContainer>

   <Button
    data={{
     title: 'Cadastrar',
     type: 'submit',
    }}
   />
  </ContainerForm>
 );
}
