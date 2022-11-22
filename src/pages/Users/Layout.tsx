import { useRef } from 'react';
import { Table } from '../../components/Table/Table';
import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormAdmin } from '../../modules/FormAdmin';
import { useInternalModal } from '../../services/hooks/Modals';
import { ContainerUsers } from './styles';
import { AdminProps, LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const { Modal, handleOpenModal } = useInternalModal();
 const refDeleteCard = useRef(null);
 return (
  <AdminLayout
   onClick={() => {
    data?.setSelectedAdmin({}), handleOpenModal();
   }}
  >
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
      {data?.selectedAdmin && (
       <FormAdmin
        data={{
         selectedAdmin: data?.selectedAdmin
          ? data.selectedAdmin
          : ({} as AdminProps),
        }}
       />
      )}
      {!data?.selectedAdmin && <FormAdmin />}
     </Modal>
    ) : null}
   </ContainerUsers>
  </AdminLayout>
 );
}
