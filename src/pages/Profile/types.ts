import { ProfileProps } from '../../services/types/ProfileProps';

export interface LayoutProps {
 data: {
  response?: ProfileProps;
  isLoading: boolean;
 };
}
