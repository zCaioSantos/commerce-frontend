import { useAtom } from 'jotai';
import { showModalState } from './states';

export const useData = () => {
 const [visible, setVisible] = useAtom(showModalState);
 const handleOpenModal = () => {
  setVisible(true);
 };
 const handleCloseModal = () => {
  setVisible(false);
 };

 return { visible, handleOpenModal, handleCloseModal };
};
