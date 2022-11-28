import { useRef } from 'react';
import { Table } from '../../components/Table/Table';
import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormProduct } from '../../modules/FornProduct';
import { useInternalModal } from '../../services/hooks/Modals';
import { ContainerProducts } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const { Modal, handleOpenModal } = useInternalModal();
 const refDeleteCard = useRef(null);
 return (
  <AdminLayout
   onClick={() => {
    data?.setSelectedProduct({}), handleOpenModal();
   }}
  >
   <ContainerProducts>
    <Table data={data} />
    {Modal ? (
     <Modal
      data={{
       alignModal: 'center',
       showCloseButton: true,
       ref: refDeleteCard,
      }}
     >
      {data?.selectedProduct && (
       <FormProduct
        data={{
         selectProduct: data.selectedProduct,
        }}
       />
      )}
      {!data?.selectedProduct && <FormProduct />}
     </Modal>
    ) : null}
   </ContainerProducts>
  </AdminLayout>
 );
}
