import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../../services/api/AxiosConfig';
import queryClient from '../../../services/api/queryClient';
import { useInternalModal } from '../../../services/hooks/Modals';
import { Layout } from './Layout';
import { ControllerProps } from './types';
// import { useData } from './data';
export function Controller({ data }: ControllerProps) {
 const { handleCloseModal } = useInternalModal();
 const onDelete = useMutation({
  mutationFn: (id: number) => {
   return api.delete(`/imagem/${id}`);
  },
  onMutate: () => {
   toast.loading('Excluindo imagem..', {
    toastId: 'onLoadingDeletProductImg',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProducts');
   toast.update('onLoadingDeletProductImg', {
    render: 'Imagem excluida com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: () => {
   toast.update('onLoadingDeletProductImg', {
    render: 'Falha ao tentar deletar imagem!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 return <Layout data={data} onClick={onDelete.mutate} />;
}
