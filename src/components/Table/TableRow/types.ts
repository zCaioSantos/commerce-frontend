import { AdminProps } from '../../../pages/Users/types';
import { Columns } from '../../../services/types/Column';

export interface ControllerProps {
 data: {
  columns: Columns[];
  content: DataList;
  onDelete: (id: any) => void;
  onEdit: (dataAdmin: AdminProps) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = any | undefined> = T;
