import { Columns } from '../../../services/types/Column';

export interface ControllerProps {
 data: {
  columns: Columns[];
  content: DataList;
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = any | undefined> = T;
