import { ImagemProps } from './ImagemProps';

export type ProdutoProps = {
 produto_id: number;
 nome: string;
 descricao: string;
 avaliacao: string;
 preco: string;
 estoque: number;
 status: boolean;
 imagens: ImagemProps[];
};

export interface ProdutosPropsToCart extends ProdutoProps {
 quantidade: number | 0;
}
