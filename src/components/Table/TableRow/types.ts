import { ColumnsProps } from '../../../services/types/ColumnProps';

export interface ControllerProps {
 data: {
  columns: ColumnsProps[];
  content: DataList;
  onDelete: (id: any) => void;
  onEdit: (data: any) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = any | undefined> = T;
