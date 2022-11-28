import { useQuery } from 'react-query';
import api from '../../services/api/AxiosConfig';
import { useAuth } from '../../services/context/Auth/hook';
import { ProfileProps } from '../../services/types/ProfileProps';
import { Layout } from './Layout';

export function Controller() {
 const { getUser } = useAuth();

 const { data, isLoading } = useQuery(['getProfile'], () => {
  const response = api.get<ProfileProps>(`/cliente/${getUser().id}`);
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
