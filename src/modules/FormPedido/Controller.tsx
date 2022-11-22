import axios from 'axios';
import { useQuery } from 'react-query';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';
import { ControllerProps } from './type';

export function Controller({ data }: ControllerProps) {
 const {
  data: ListAndress,
  isFetched,
  isLoading,
 } = useQuery(['getAndressClient'], () => {
  const responseData = axios.get<ResponseProps<EnderecoProps[]>>(
   'http://localhost:5000/endereco/?cliente_id=4'
  );
  return responseData;
 });

 return (
  <Layout
   data={data}
   ListAndress={{
    response: ListAndress?.data,
    isFetched,
    isLoading,
   }}
  />
 );
}
