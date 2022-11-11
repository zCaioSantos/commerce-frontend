import { Columns } from '../../../services/types/Column';

export interface ControllerProps {
 data: {
  columns: Columns[];
  content: DataList;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = any | undefined> = T;
