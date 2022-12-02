import { RequestProps } from '../../services/types/RequestProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data: {
  response?: ResponseProps<RequestProps[]>;
  onEdit: (request: RequestProps) => void;
  isLoading: boolean;
  selectedRequest?: RequestProps;
 };
}
