import { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { Layout } from './Layout';
import { ControllerProps } from './type';

export function Controller({ data }: ControllerProps) {
 const [selectedAndress, setSelectedAndress] = useState({} as EnderecoProps);
 const { handleOpenModal } = useInternalModal();

 const onDelete = useMutation({
  mutationFn: (id: string) => {
   return api.delete(`/endereco/${id}`);
  },
  onMutate: () => {
   toast.loading('Deletando endereço..', {
    toastId: 'onLoadingDelet',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProfile');
   toast.update('onLoadingDelet', {
    render: 'Endereço deletado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: () => {
   toast.update('onLoadingDelet', {
    render: 'Falha ao tentar deletar endereço',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onEditAndress = (dataAndress: EnderecoProps) => {
  setSelectedAndress(dataAndress);
  handleOpenModal();
 };

 return (
  <Layout
   data={data}
   onDelet={onDelete.mutate}
   onEdit={onEditAndress}
   selectedAndress={selectedAndress}
   setSelectedAndress={setSelectedAndress}
  />
 );
}
