import { useQuery } from 'react-query';
import api from '../../services/api/AxiosConfig';
import { ProdutoProps } from '../../services/types/ProdutoProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';

export function Controller() {
 const { data, isFetched, isLoading } = useQuery(['getProducts'], async () => {
  const response = await api.get<ResponseProps<ProdutoProps[]>>('/produto/');
  return response;
 });

 return (
  <Layout
   data={{
    response: data?.data,
    isLoading,
    isFetched,
   }}
  />
 );
}
