import { BsFillArchiveFill, BsPersonFill } from 'react-icons/bs';

export const sidebarItems = [
 {
  id: '0f485b8c-45a5-11ed-b878-0242ac120002',
  name: 'Usuários',
  route: '/dashboard/users',
  icon: <BsPersonFill />,
 },
 {
  id: '0f485b8c-45a5-11ed-b878-0242ac120003',
  name: 'Produtos',
  route: '/dashboard/products',
  icon: <BsFillArchiveFill size={30} />,
 },
];
