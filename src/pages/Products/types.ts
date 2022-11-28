import { ColumnsProps } from '../../services/types/ColumnProps';
import { ProdutoProps } from '../../services/types/ProdutoProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data: {
  columns: ColumnsProps[];
  response?: ResponseProps<ProdutoProps[]>;
  isFetched?: boolean;
  isLoading?: boolean;
  onEdit: (dataProduct: ProdutoProps) => void;
  onDelete?: (id: string) => void;
  selectedProduct?: ProdutoProps;
  setSelectedProduct?: (data: ProdutoProps) => void;
 };
}
