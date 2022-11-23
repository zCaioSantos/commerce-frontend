/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ContainerForm, InputFileContainer } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit },
 },
 onSetImg,
}: LayoutProps) {
 const [listaImgs, setListaImgs] = useState<File[]>([]);
 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <strong>Formulario de </strong>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Nome',
     register: register('nome'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Descrição',
     register: register('descricao'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Avaliação',
     register: register('avaliacao'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Estoque',
     register: register('estoque'),
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Preço',
     register: register('preco'),
    }}
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
