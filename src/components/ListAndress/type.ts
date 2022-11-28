import { EnderecoProps } from '../../services/types/EnderecoProps';

export interface ControllerProps {
 data?: EnderecoProps[];
}

export interface LayoutProps extends ControllerProps {
 onEdit: (andress: EnderecoProps) => void;
 onDelet: (id: any) => void;
 selectedAndress?: EnderecoProps;
 setSelectedAndress: (andress: EnderecoProps) => void;
}
