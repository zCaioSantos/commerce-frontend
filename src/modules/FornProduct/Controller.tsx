import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import queryClient from '../../services/api/queryClient';
import { ProdutoProps } from '../../services/types/ProdutoProps';

import { Layout } from './Layout';

export function Controller() {
 //  const { handleCloseModal } = useInternalModal();

 const [img, setImg] = useState<File>();

 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<ProdutoProps>();

 const onCreate = useMutation({
  mutationFn: (data: any) => {
   return axios.post(`http://localhost:5000/produto/`, data);
  },
  onMutate: () => {
   toast.loading('Cadastrando produtoc..', {
    toastId: 'onCreateProduct',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProduto');
   toast.update('onCreateProduct', {
    render: 'Produto criado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: (error: AxiosError) => {
   toast.update('onCreateAdmin', {
    render: error.message,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataProduct: ProdutoProps) => {
  const formData = new FormData();
  formData.append('produto', JSON.stringify(dataProduct));
  formData.append('file', img);
  onCreate.mutate(formData);
 };

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataProduct: ProdutoProps) => onSubmit(dataProduct),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} onSetImg={setImg} />;
}
