import { ColumnsProps } from '../../services/types/ColumnProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data: {
  columns: ColumnsProps[];
  response?: ResponseProps<AdminProps[]>;
  isFetched?: boolean;
  isLoading?: boolean;
  onEdit: (dataAdmin: AdminProps) => void;
  onDelete?: (id: string) => void;
  selectedAdmin?: AdminProps;
  setSelectedAdmin?: (data: AdminProps) => void;
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
