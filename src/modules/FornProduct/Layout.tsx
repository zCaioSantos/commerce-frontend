/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { CardImageSmall } from '../../components/Cards/CardImageSmall';
import { InputText } from '../../components/Inputs/InputText';
import { useAuth } from '../../services/context/Auth/hook';
import { ContainerForm, ErrrorMessage, InputFileContainer } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading, errors },
 },
 selectProduct,
 onSetImg,
}: LayoutProps) {
 const [listaImgs, setListaImgs] = useState<File[]>([]);
 const { getUser } = useAuth();

 return (
  <ContainerForm onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <strong>Formulario de {!selectProduct?.id ? 'Cadastro' : 'Edição'}</strong>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Nome',
     register: register('nome', {
      required: {
       value: true,
       message: 'Informe um nome do produto.',
      },
     }),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <ErrrorMessage>{errors.nome?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Descrição',
     register: register('descricao', {
      required: {
       value: true,
       message: 'Informe a descrição do produto.',
      },
     }),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <ErrrorMessage>{errors.descricao?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Avaliação',
     register: register('avaliacao', {
      required: {
       value: true,
       message: 'Avaliação do produto.',
      },
     }),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <ErrrorMessage>{errors.avaliacao?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Estoque',
     register: register('estoque', {
      required: {
       value: true,
       message: 'Informe a quantidade no estoque.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.estoque?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'text',
     placeholder: 'Preço',
     register: register('preco', {
      required: {
       value: true,
       message: 'Informe o preço do produto.',
      },
     }),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <ErrrorMessage>{errors.preco?.message}</ErrrorMessage>

   {getUser().perfil !== 'estoquista' && (
    <InputFileContainer>
     <label htmlFor="image">
      <BsImage size={25} />
      Clique para escolher a imagem do produto
      <input
       onChange={(e) => {
        setListaImgs([...e.target.files]), onSetImg([...e.target.files]);
       }}
       id="image"
       accept="image/*"
       type="file"
       multiple
       disabled={getUser().perfil === 'estoquista'}
      />
      {listaImgs.map((img) => (
       <span>
        <b>Imagem selecionada:</b> {img.name}
       </span>
      ))}
     </label>
    </InputFileContainer>
   )}

   {getUser().perfil !== 'estoquista' && (
    <CardImageSmall data={selectProduct?.imagens} />
   )}

   <Button
    data={{
     title: !selectProduct?.id ? 'Cadastrar' : 'Salvar',
     type: 'submit',
     disabled: isLoading,
    }}
   />
  </ContainerForm>
 );
}
