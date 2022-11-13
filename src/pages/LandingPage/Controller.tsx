import axios from 'axios';
import { useQuery } from 'react-query';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';

export function Controller() {
 const { data, isFetched, isLoading } = useQuery(['getProducts'], () => {
  const response = axios.get<ResponseProps>('http://localhost:5000/produto/');
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
