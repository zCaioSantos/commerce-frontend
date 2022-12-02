import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';
import { RequestProps } from '../../services/types/RequestProps';
import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ selectRequest }: ControllerProps) {
 const { handleCloseModal } = useInternalModal();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<RequestProps>({
  defaultValues: selectRequest,
 });

 const onEdit = useMutation({
  mutationFn: (data: RequestProps) => {
   return api.put(`/pedido/${data.id}`, data);
  },
  onMutate: () => {
   toast.loading('Editando status do pedido..', {
    toastId: 'onEditRequest',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getRequestDashboard');
   toast.update('onEditRequest', {
    render: 'Status do pedido atualizado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: () => {
   toast.update('onEditRequest', {
    render: 'Falha ao tentar mudar status desse pedido!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const data = {
  hookForm: {
   register,
   handleSubmit,
   onSubmit: (dataRequest: RequestProps) => onEdit.mutate(dataRequest),
   errors,
   isLoading: onEdit.isLoading,
  },
 };

 return <Layout data={data} />;
}
