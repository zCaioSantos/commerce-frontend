import { useQuery } from 'react-query';
import api from '../../services/api/AxiosConfig';
import { useAuth } from '../../services/context/Auth/hook';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';
import { ControllerProps } from './type';

export function Controller({ data }: ControllerProps) {
 const { getUser } = useAuth();
 const {
  data: ListAndress,
  isFetched,
  isLoading,
 } = useQuery(['getAndressClient'], () => {
  const responseData = api.get<ResponseProps<EnderecoProps[]>>(
   `/endereco/?cliente_id=${getUser().id}`
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
