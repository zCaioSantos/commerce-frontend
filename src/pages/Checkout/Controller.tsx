import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PedidoProps } from '../../modules/FormPedido/type';
import api from '../../services/api/AxiosConfig';
import { useAuth } from '../../services/context/Auth/hook';
import { useCartShop } from '../../services/context/ShopCart/hook';
import { Layout } from './Layout';

export function Controller() {
 const { listCartProducts, getQuantityProducts, clearToCart } = useCartShop();
 const navigate = useNavigate();
 const [frete, setFrete] = useState<number>(0);
 const { getUser } = useAuth();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<PedidoProps>();

 useEffect(() => {
  if (getQuantityProducts() === 0) {
   navigate('/');
  }
 }, [getQuantityProducts, listCartProducts, navigate]);

 const onCreate = useMutation({
  mutationFn: (data: any) => {
   return api.post(`/pedido/${getUser().id}`, data);
  },
  onMutate: () => {
   toast.loading('Finalizando compra..', {
    toastId: 'onCreatePedido',
   });
  },
  onSuccess: () => {
   toast.update('onCreatePedido', {
    render: 'Pedido realizado com sucesso!!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   clearToCart();
   navigate('/');
  },
  onError: () => {
   toast.update('onCreatePedido', {
    render: 'Falha ao tentar ao comprar!',
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataPedido: PedidoProps) => {
  const dataSubmit = {
   ...dataPedido,
   lista_produtos: [...listCartProducts],
  };
  onCreate.mutate(dataSubmit);
 };

 const data = {
  hookForm: {
   register,
   handleSubmit,
   onSubmit: (dataPedido: PedidoProps) => onSubmit(dataPedido),
   errors,
  },
  setFrete,
  getFrete: frete,
 };

 return <Layout data={data} isLoading={onCreate.isLoading} />;
}
