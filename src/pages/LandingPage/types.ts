import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data: {
  response?: ResponseProps;
  isLoading: boolean;
  isFetched: boolean;
 };
}
