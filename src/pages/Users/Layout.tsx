import { useRef } from 'react';
import { Table } from '../../components/Table/Table';
import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormAdmin } from '../../modules/FormAdmin';
import { useInternalModal } from '../../services/hooks/Modals';
import { ContainerUsers } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const { Modal, handleOpenModal } = useInternalModal();
 const refDeleteCard = useRef(null);
 return (
  <AdminLayout onClick={handleOpenModal}>
   <ContainerUsers>
    <Table data={data} />
    {Modal ? (
     <Modal
      data={{
       alignModal: 'center',
       showCloseButton: true,
       ref: refDeleteCard,
      }}
     >
      <FormAdmin />
     </Modal>
    ) : null}
   </ContainerUsers>
  </AdminLayout>
 );
}
