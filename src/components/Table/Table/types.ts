import { Columns } from '../../../services/types/Column';
import { ResponseProps } from '../../../services/types/Response';

export interface ControllerProps {
 data: {
  columns: Columns[];
  response?: ResponseProps;
  isFetched?: boolean;
  isLoading?: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
 };
}

export type LayoutProps = ControllerProps;