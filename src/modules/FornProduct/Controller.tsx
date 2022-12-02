import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';
import { ProdutoProps } from '../../services/types/ProdutoProps';

import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ data: product }: ControllerProps) {
 const { handleCloseModal } = useInternalModal();
 const [img, setImg] = useState<File[]>();

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<ProdutoProps>({
  defaultValues: product?.selectProduct,
 });

 const onCreate = useMutation({
  mutationFn: (data: any) => {
   return api.post(`/produto/`, data, {
    headers: {
     'Content-Type': 'multipart/form-data',
    },
   });
  },
  onMutate: () => {
   toast.loading('Cadastrando produto..', {
    toastId: 'onCreateProduct',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProducts');
   toast.update('onCreateProduct', {
    render: 'Produto criado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: (error: AxiosError) => {
   toast.update('onCreateProduct', {
    render: error.message,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onEdit = useMutation({
  mutationFn: (data: any) => {
   return api.put(`/produto/${product?.selectProduct?.id}`, data, {
    headers: {
     'Content-Type': 'multipart/form-data',
    },
   });
  },
  onMutate: () => {
   toast.loading('Editando produto..', {
    toastId: 'onEditProduct',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProducts');
   toast.update('onEditProduct', {
    render: 'Produto editado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: () => {
   toast.update('onEditProduct', {
    render: 'Falha ao tentar editar esse produto',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataProduct: ProdutoProps) => {
  const formData = new FormData();

  for (let i = 0; i < img.length; i++) {
   formData.append('file', img[i]);
  }
  formData.append('produto', JSON.stringify(dataProduct));

  if (!dataProduct?.id) {
   onCreate.mutate(formData);
  } else {
   onEdit.mutate(formData);
  }
 };

 const data = {
  hookForm: {
   register,
   handleSubmit,
   onSubmit: (dataProduct: ProdutoProps) => onSubmit(dataProduct),
   errors,
   isLoading: onEdit.isLoading || onCreate.isLoading,
  },
 };

 return (
  <Layout
   data={data}
   onSetImg={setImg}
   selectProduct={product?.selectProduct}
  />
 );
}
