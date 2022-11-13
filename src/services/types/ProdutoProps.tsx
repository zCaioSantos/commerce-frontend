import { ImagemProps } from './ImagemProps';

export type ProdutoProps = {
 produto_id: number;
 nome: string;
 descricao: string;
 avaliacao: number;
 preco: number;
 estoque: number;
 status: boolean;
 imagens: ImagemProps[];
};
