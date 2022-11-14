import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import queryClient from '../../services/api/queryClient';
import { ResponseProps } from '../../services/types/Response';
import { useColumns } from './data';
import { Layout } from './Layout';

export function Controller() {
 const columns = useColumns();

 const { data, isFetched, isLoading } = useQuery(['getAdmins'], () => {
  const response = axios.get<ResponseProps>(
   'http://localhost:5000/users/admins'
  );
  return response;
 });

 const onEditAdmin = (id: string) => {
  console.log(`Editar ${id}`);
 };

 const onDelete = useMutation({
  mutationFn: (id) => {
   return axios.delete(`http://localhost:5000/users/${id}`);
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

 const onCreateAdmin = () => {
  console.log('Criar');
 };

 return (
  <Layout
   data={{
    columns: columns.data.columns,
    response: data?.data,
    isFetched,
    isLoading,
    onEdit: onEditAdmin,
    onDelete: onDelete.mutate,
    onCreate: onCreateAdmin,
   }}
  />
 );
}
