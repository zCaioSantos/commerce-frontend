import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AdminProps } from '../../pages/Users/types';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useInternalModal } from '../../services/hooks/Modals';

import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ data: selectedAdmin }: ControllerProps) {
 const { handleCloseModal } = useInternalModal();
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<AdminProps>({
  defaultValues: { ...selectedAdmin?.selectedAdmin },
 });

 const onCreate = useMutation({
  mutationFn: (data: AdminProps) => {
   return api.post(`/admin/`, data);
  },
  onMutate: () => {
   toast.loading('Ativando/desativando usuário..', {
    toastId: 'onCreateAdmin',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getAdmins');
   toast.update('onCreateAdmin', {
    render: 'Usuario criado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: () => {
   toast.update('onCreateAdmin', {
    render: 'Falha ao tentar criar novo usuario!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onEdit = useMutation({
  mutationFn: (data: AdminProps) => {
   return api.put(`/admin/${data.id}`, data);
  },
  onMutate: () => {
   toast.loading('Editando usuário..', {
    toastId: 'onEditAdmin',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getAdmins');
   toast.update('onEditAdmin', {
    render: 'Usuario editado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   handleCloseModal();
  },
  onError: () => {
   toast.update('onEditAdmin', {
    render: 'Falha ao tentar editar esse usuario',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataAdmin: AdminProps) => {
  if (!selectedAdmin?.selectedAdmin?.id) {
   onCreate.mutate(dataAdmin);
  } else {
   onEdit.mutate(dataAdmin);
  }
 };

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataAdmin: AdminProps) => onSubmit(dataAdmin),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} selectedAdmin={selectedAdmin?.selectedAdmin} />;
}
