import {
 BsHouse,
 BsListUl,
 BsReceipt,
 BsArrowLeftRight,
 BsUpc,
 BsCreditCard,
 BsJournalText,
 BsPencilSquare,
 BsPower,
} from 'react-icons/bs';

export const sidebarItems = [
 {
  id: '0f485b8c-45a5-11ed-b878-0242ac120002',
  name: 'Home',
  route: '/home',
  icon: <BsHouse />,
 },
 {
  id: 'e1ed5b3c-45a5-11ed-b878-0242ac120002',
  name: 'Extrato',
  route: '/extrato',
  icon: <BsListUl />,
 },
 {
  id: 'ea033ce2-45a5-11ed-b878-0242ac120002',
  name: 'Comprovantes',
  route: '/comprovantes',
  icon: <BsReceipt />,
 },
 {
  id: '32414fba-7814-4901-a219-05ac1a4b199f',
  name: 'Transferências',
  route: '/transferencias',
  icon: <BsArrowLeftRight />,
 },
 {
  id: '6c2385a6-45a6-11ed-b878-0242ac120002',
  name: 'Pagar Boleto',
  route: '/pagar-boleto',
  icon: <BsUpc />,
 },
 {
  id: '71a19a5e-45a6-11ed-b878-0242ac120002',
  name: 'Cartões',
  route: '/cartoes',
  icon: <BsCreditCard />,
 },
 {
  id: '74543f04-45a6-11ed-b878-0242ac120002',
  name: 'Tarifas e Prazos',
  route: '/tarifas-e-prazos',
  icon: <BsJournalText />,
 },
 {
  id: '785eb58e-45a6-11ed-b878-0242ac120002',
  name: 'Alterar Dados',
  route: '/alterar-dados',
  icon: <BsPencilSquare />,
 },
 {
  id: '7bd4e936-45a6-11ed-b878-0242ac120002',
  name: 'Sair',
  route: '/sair',
  icon: <BsPower />,
 },
];
