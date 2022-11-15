import { useOnClickOutside } from 'usehooks-ts';
import { useData } from './data';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({
 children,
 data: { alignModal, showCloseButton, ref },
}: LayoutProps) {
 const { handleCloseModal } = useData();
 useOnClickOutside(ref, handleCloseModal);

 return (
  <Container alignModal={alignModal} showCloseButton={showCloseButton}>
   <div className="modal-container">
    <div className="modal-content" ref={ref}>
     <span
      id="modal-close"
      className="modal-close"
      onClick={handleCloseModal}
      aria-hidden="true"
     />
     {children}
    </div>
   </div>
  </Container>
 );
}
