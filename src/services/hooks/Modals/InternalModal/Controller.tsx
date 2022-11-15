import { Layout } from './Layout';
import { useData } from './data';

export function Controller() {
 const { handleCloseModal, handleOpenModal, visible } = useData();

 return {
  Modal: visible ? Layout : null,
  handleOpenModal,
  handleCloseModal,
 };
}
