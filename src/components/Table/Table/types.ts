import { AdminProps } from '../../../pages/Users/types';
import { ColumnsProps } from '../../../services/types/ColumnProps';
import { ResponseProps } from '../../../services/types/ResponseProps';

export interface ControllerProps {
 data: {
  columns: ColumnsProps[];
  response?: ResponseProps<any>;
  isFetched?: boolean;
  isLoading?: boolean;
  onEdit: (dataAdmin: AdminProps) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
 };
}

export type LayoutProps = ControllerProps;
