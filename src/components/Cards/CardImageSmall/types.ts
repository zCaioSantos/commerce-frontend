import { ImagemProps } from '../../../services/types/ImagemProps';

export interface ControllerProps {
 data?: ImagemProps[];
 onClick: (id: number) => void;
}

export type LayoutProps = ControllerProps;
