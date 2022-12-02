import { useState } from 'react';
import { useQuery } from 'react-query';
import api from '../../services/api/AxiosConfig';
import { useInternalModal } from '../../services/hooks/Modals';
import { RequestProps } from '../../services/types/RequestProps';
import { ResponseProps } from '../../services/types/ResponseProps';
import { Layout } from './Layout';

export function Controller() {
 const { handleOpenModal } = useInternalModal();
 const [selectedRequest, setSelectedRequest] = useState({} as RequestProps);

 const { data, isLoading } = useQuery(['getRequestDashboard'], () => {
  const response = api.get<ResponseProps<RequestProps[]>>('/pedido/');
  return response;
 });

 const onEdit = (dataRequest: RequestProps) => {
  setSelectedRequest(dataRequest);
  handleOpenModal();
 };

 return (
  <Layout
   data={{
    response: data?.data,
    onEdit,
    isLoading,
    selectedRequest,
   }}
  />
 );
}
