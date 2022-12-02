import { ImagemProps } from '../../../services/types/ImagemProps';

export interface ControllerProps {
 data?: ImagemProps[];
}

export interface LayoutProps extends ControllerProps {
 onClick: (id: number) => void;
}
