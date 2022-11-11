import { Columns } from '../../../services/types/Column';
import { ResponseProps } from '../../../services/types/Response';

export interface ControllerProps {
 data: {
  columns: Columns[];
  response?: ResponseProps;
  loading?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
 };
}

export type LayoutProps = ControllerProps;
