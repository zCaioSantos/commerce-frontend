import { BsBagFill, BsFillArchiveFill, BsPersonFill } from 'react-icons/bs';

const AccesAdmin = ['admin'];
const AccesMod = ['admin', 'estoquista'];

export const sidebarItems = [
 {
  id: '0f485b8c-45a5-11ed-b878-0242ac120002',
  name: 'Usuários',
  route: '/dashboard/users',
  icon: <BsPersonFill />,
  access: AccesAdmin,
 },
 {
  id: '0f485b8c-45a5-11ed-b878-0242ac120003',
  name: 'Produtos',
  route: '/dashboard/products',
  icon: <BsFillArchiveFill size={30} />,
  access: AccesMod,
 },
 {
  id: '9d0d2b1c-7180-11ed-a1eb-0242ac120002',
  name: 'Pedidos de Clientes',
  route: '/dashboard/requests',
  icon: <BsBagFill size={30} />,
  access: AccesMod,
 },
];
