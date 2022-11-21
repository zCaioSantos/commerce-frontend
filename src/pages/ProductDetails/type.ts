import { ProdutoProps } from '../../services/types/ProdutoProps';

export interface LayoutProps {
 data: {
  response?: ProdutoProps;
  isLoading: boolean;
  isFetched: boolean;
 };
}
