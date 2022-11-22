import { AdminProps } from '../../../pages/Users/types';
import { ColumnsProps } from '../../../services/types/ColumnProps';

export interface ControllerProps {
 data: {
  columns: ColumnsProps[];
  content: DataList;
  onDelete: (id: any) => void;
  onEdit: (dataAdmin: AdminProps) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = any | undefined> = T;
