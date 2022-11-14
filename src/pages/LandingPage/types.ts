import { ResponseProps } from '../../services/types/ResponseProps';

export interface LayoutProps {
 data?: ProdutoProps[];
}

export type ProdutoProps = {
 id: number;
 nome: string;
 descricao: string;
 avaliacao: number;
 preco: number;
 estoque: number;
 status: boolean;
 imagens: ImagemProps[];
};

export type ImagemProps = {
 url: number[];
 tipo: string;
};
