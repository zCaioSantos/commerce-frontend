import { ProdutoProps } from '../../services/types/ProdutoProps';

export interface LayoutProps {
 data: {
  response?: ProdutoProps | any;
  isLoading: boolean;
  isFetched: boolean;
 };
}
