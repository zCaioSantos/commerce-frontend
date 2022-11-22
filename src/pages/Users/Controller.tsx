import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';
import { ResponseProps } from '../../services/types/ResponseProps';

import { useColumns } from './data';
import { Layout } from './Layout';
import { AdminProps } from './types';

export function Controller() {
 const columns = useColumns();
 const { handleOpenModal } = useInternalModal();
 const [selectedAdmin, setSelectedAdmin] = useState({} as AdminProps);

 const { data, isFetched, isLoading } = useQuery(['getAdmins'], () => {
  const response = axios.get<ResponseProps<AdminProps[]>>(
   'http://localhost:5000/admin/'
  );
  return response;
 });

 const onEditAdmin = (dataAdmin: AdminProps) => {
  setSelectedAdmin(dataAdmin);
  handleOpenModal();
 };

 const onDelete = useMutation({
  mutationFn: (id: string) => {
   return axios.delete(`http://localhost:5000/admin/${id}`);
  },
  onMutate: () => {
   toast.loading('Ativando/desativando usuário..', {
    toastId: 'onLoadingDelet',
   });
  },
  onSuccess: (response) => {
   queryClient.invalidateQueries('getAdmins');
   toast.update('onLoadingDelet', {
    render: response.data,
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: (error: AxiosError) => {
   toast.update('onLoadingDelet', {
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
    onEdit: onEditAdmin,
    onDelete: onDelete.mutate,
    selectedAdmin,
    setSelectedAdmin,
   }}
  />
 );
}
