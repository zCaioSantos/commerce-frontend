import { EnderecoProps } from '../../../services/types/EnderecoProps';

export interface ControllerProps {
 data: {
  andress: EnderecoProps;
  onEdit: (andress: EnderecoProps) => void;
  onDelet: (id: number) => void;
 };
}

export type LayoutProps = ControllerProps;
