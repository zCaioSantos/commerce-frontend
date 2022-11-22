import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PedidoProps } from '../../modules/FormPedido/type';
import { useCartShop } from '../../services/context/ShopCart/hook';
import { Layout } from './Layout';
// import { useData } from './data';
export function Controller() {
 const { listCartProducts, getQuantityProducts, clearToCart } = useCartShop();
 const navigate = useNavigate();
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<PedidoProps>();

 useEffect(() => {
  if (getQuantityProducts() === 0) {
   navigate('/');
  }
 }, [getQuantityProducts, listCartProducts, navigate]);

 const onCreate = useMutation({
  mutationFn: (data: any) => {
   return axios.post(`http://localhost:5000/pedido/`, data);
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
   cliente_id: 4,
   valor_frete: 20,
   lista_produtos: [...listCartProducts],
  };
  onCreate.mutate(dataSubmit);
 };

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataPedido: PedidoProps) => onSubmit(dataPedido),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} isLoading={onCreate.isLoading} />;
}
