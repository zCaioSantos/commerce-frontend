import { EnderecoProps } from './EnderecoProps';

export interface ProfileProps {
 id: number;
 nome: string;
 email: string;
 data_nascimento: string;
 telefone: string;
 genero?: string;
 cpf: string;
 enderecos: EnderecoProps[];
}
