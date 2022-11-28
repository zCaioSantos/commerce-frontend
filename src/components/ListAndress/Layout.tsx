import { useRef } from 'react';
import { FormAndress } from '../../modules/FormAndress';
import { useInternalModal } from '../../services/hooks/Modals';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { Button } from '../Button';
import { CardAndressInfo } from '../Cards/CardAndressInfo';
import { ContainerList, Title } from './styles';
import { LayoutProps } from './type';

export function Layout({
 data,
 onDelet,
 onEdit,
 selectedAndress,
 setSelectedAndress,
}: LayoutProps) {
 const { Modal, handleOpenModal } = useInternalModal();
 const refDeleteCard = useRef(null);
 return (
  <div>
   <Title>Endereços</Title>
   <ContainerList>
    <li>
     <Button
      data={{
       title: 'Acionar Endereço',
       type: 'button',
       onClick: () => {
        handleOpenModal(), setSelectedAndress({} as EnderecoProps);
       },
      }}
     />
    </li>
    {data?.map((andress) => (
     <CardAndressInfo
      data={{
       andress,
       onDelet,
       onEdit,
      }}
     />
    ))}
   </ContainerList>
   {Modal ? (
    <Modal
     data={{
      alignModal: 'center',
      showCloseButton: true,
      ref: refDeleteCard,
     }}
    >
     {!selectedAndress && <FormAndress />}
     {selectedAndress && <FormAndress data={selectedAndress} />}
    </Modal>
   ) : null}
  </div>
 );
}
