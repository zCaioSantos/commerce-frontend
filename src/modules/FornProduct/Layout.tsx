/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { CardImageSmall } from '../../components/Cards/CardImageSmall';
import { InputText } from '../../components/Inputs/InputText';
import { useAuth } from '../../services/context/Auth/hook';
import { ContainerForm, InputFileContainer } from './style';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, isLoading },
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
     register: register('nome'),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Descrição',
     register: register('descricao'),
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   <InputText
    data={{
     type: 'text',
     placeholder: 'Avaliação',
     register: register('avaliacao'),
     disabled: getUser().perfil === 'estoquista',
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
     disabled: getUser().perfil === 'estoquista',
    }}
   />

   {getUser().perfil !== 'estoquista' && (
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
       disabled={getUser().perfil === 'estoquista'}
      />
      {listaImgs.length > 0 && (
       <span>
        <b>Imagem selecionada:</b> {listaImgs[0].name}
       </span>
      )}
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
