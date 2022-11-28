import { AxiosError } from 'axios';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';
import { ProdutoProps } from '../../services/types/ProdutoProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { useColumns } from './data';
import { Layout } from './Layout';

export function Controller() {
 const columns = useColumns();
 const { handleOpenModal } = useInternalModal();
 const [selectedProduct, setSelectedProduct] = useState({} as ProdutoProps);

 const { data, isFetched, isLoading } = useQuery(['getProducts'], () => {
  const response = api.get<ResponseProps<ProdutoProps[]>>('/produto/');
  return response;
 });

 const onEditProduct = (dataProduct: ProdutoProps) => {
  setSelectedProduct(dataProduct);
  handleOpenModal();
 };

 const onDelete = useMutation({
  mutationFn: (id: string) => {
   return api.delete(`/produto/${id}`);
  },
  onMutate: () => {
   toast.loading('Ativando/desativando produto..', {
    toastId: 'onLoadingDeletProduct',
   });
  },
  onSuccess: (response) => {
   queryClient.invalidateQueries('getProducts');
   toast.update('onLoadingDeletProduct', {
    render: response.data,
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: (error: AxiosError) => {
   toast.update('onLoadingDeletProduct', {
    render: error.message,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 return (
  <Layout
   data={{
    columns: columns.data.columns,
    response: data?.data,
    isFetched,
    isLoading,
    onEdit: onEditProduct,
    onDelete: onDelete.mutate,
    selectedProduct,
    setSelectedProduct,
   }}
  />
 );
}
