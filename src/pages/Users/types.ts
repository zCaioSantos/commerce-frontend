import { Columns } from '../../services/types/Column';
import { ResponseProps } from '../../services/types/Response';

export interface LayoutProps {
 data: {
  columns: Columns[];
  response?: ResponseProps;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCreate?: () => void;
 };
}

export type AdminProps = {
 id: number;
 nome: string;
 email: string;
 status: boolean;
 perfil: string;
 data_nascimento: string;
 cpf: string;
 telefone: string;
 senha: string;
};
