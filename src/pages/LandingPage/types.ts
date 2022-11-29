import { ProdutoProps } from '../../services/types/ProdutoProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data: {
  response?: ResponseProps<ProdutoProps[]>;
  isLoading: boolean;
  isFetched: boolean;
 };
}
