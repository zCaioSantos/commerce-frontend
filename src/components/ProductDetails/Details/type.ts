import { ProdutoProps } from '../../../services/types/ProdutoProps';

export interface ControllerProps {
 data: {
  content?: ProdutoProps;
  onClick?: (id: number, quantidade: number) => void;
 };
}

export type LayoutProps = ControllerProps;
