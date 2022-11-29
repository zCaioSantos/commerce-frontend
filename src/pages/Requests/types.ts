import { PedidosProps } from '../../services/types/PedidoProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface ControllerProps {
 data: {
  response?: ResponseProps<PedidosProps[]>;
  isLoading: boolean;
 };
}

export type LayoutProps = ControllerProps;
