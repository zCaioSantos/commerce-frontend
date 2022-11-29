import { useQuery } from 'react-query';
import api from '../../services/api/AxiosConfig';
import { useAuth } from '../../services/context/Auth/hook';
import { PedidosProps } from '../../services/types/PedidoProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';

export function Controller() {
 const { getUser } = useAuth();

 const { data, isLoading } = useQuery([`getRequests_${getUser().id}`], () => {
  const response = api.get<ResponseProps<PedidosProps[]>>(
   `/pedido/${getUser().id}`
  );
  return response;
 });

 return (
  <Layout
   data={{
    response: data?.data,
    isLoading,
   }}
  />
 );
}
