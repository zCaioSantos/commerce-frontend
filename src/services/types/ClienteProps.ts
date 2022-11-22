import { Endereco } from './EnderecoProps';

export type ClienteProps = {
 cliente_id: number;
 nome: string;
 email: string;
 data_nascimento: string;
 telefone: string;
 genero: string;
 enderecos: Endereco[];
};
