/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormRequestStatus } from '../../modules/FormRequestStatus';
import { useInternalModal } from '../../services/hooks/Modals';
import { Button, Content, Header, Options, Row, Table } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: { isLoading, onEdit, response, selectedRequest },
}: LayoutProps) {
 const { Modal } = useInternalModal();

 const refDeleteCard = useRef(null);
 return (
  <AdminLayout disableButton>
   <Content>
    <Table>
     <Header>
      <tr>
       <th>ID</th>
       <th>Cliente</th>
       <th>Data</th>
       <th>Valor</th>
       <th>Status</th>
       <th />
      </tr>
     </Header>
     <tbody>
      {isLoading && <span>Carregando..</span>}
      {!isLoading &&
       response?.content.map((request) => (
        <Row>
         <td>{request.id}</td>
         <td>{request.cliente}</td>
         <td>
          {new Intl.DateTimeFormat('pt-BR').format(new Date(request.data))}
         </td>
         <td>{request.valor_total}</td>
         <td>{request.status_pedido}</td>
         <td>
          <Options>
           <Button onClick={() => onEdit(request)}>
            <BsPencilSquare />
           </Button>
          </Options>
         </td>
        </Row>
       ))}
     </tbody>
    </Table>
    {Modal ? (
     <Modal
      data={{
       alignModal: 'center',
       showCloseButton: true,
       ref: refDeleteCard,
      }}
     >
      {selectedRequest && <FormRequestStatus selectRequest={selectedRequest} />}
      {!selectedRequest && <FormRequestStatus />}
     </Modal>
    ) : null}
   </Content>
  </AdminLayout>
 );
}
