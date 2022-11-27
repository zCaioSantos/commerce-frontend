import { UseFormRegisterReturn } from 'react-hook-form';
import { EnderecoProps } from '../../../services/types/EnderecoProps';

export interface ControllerProps {
 data: {
  andress?: EnderecoProps;
  register?: UseFormRegisterReturn<'endereco_id'>;
 };
}

export type LayoutProps = ControllerProps;
