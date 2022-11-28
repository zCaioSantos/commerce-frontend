import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useAuth } from '../../services/context/Auth/hook';
import { useInternalModal } from '../../services/hooks/Modals';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ data: select }: ControllerProps) {
 const { getUser } = useAuth();
 const { handleCloseModal } = useInternalModal();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<EnderecoProps>({
  defaultValues: select,
 });

 const onCreateAndress = useMutation({
  mutationFn: (dataAndress: EnderecoProps) => {
   return api.post(`/endereco/${getUser().id}`, dataAndress);
  },
  onMutate: () => {
   toast.loading('Cadastrando novo endereço..', {
    toastId: 'onCreateAndress',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProfile');
   handleCloseModal();
   toast.update('onCreateAndress', {
    render: 'Endereço adicionado com sucesso.',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: () => {
   toast.update('onCreateAndress', {
    render: 'Falha ao tentar adicionar este endereço!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onEditAndress = useMutation({
  mutationFn: (dataAndress: EnderecoProps) => {
   return api.put(`/endereco/${select?.endereco_id}`, dataAndress);
  },
  onMutate: () => {
   toast.loading('Editando endereço..', {
    toastId: 'onEditAndress',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getProfile');
   handleCloseModal();
   toast.update('onEditAndress', {
    render: 'Endereço editado com sucesso.',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: () => {
   toast.update('onEditAndress', {
    render: 'Falha ao tentar editar este endereço!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataAndress: EnderecoProps) => {
  if (!select?.endereco_id) {
   onCreateAndress.mutate(dataAndress);
  } else {
   onEditAndress.mutate(dataAndress);
  }
 };

 const data = {
  hookForm: {
   register,
   handleSubmit,
   onSubmit: (dataAndress: EnderecoProps) => onSubmit(dataAndress),
   errors,
   isLoading: onCreateAndress.isLoading || onEditAndress.isLoading,
   isEdit: !!select,
  },
 };
 return <Layout data={data} />;
}
