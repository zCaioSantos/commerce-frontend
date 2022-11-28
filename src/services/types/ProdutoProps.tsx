import { ImagemProps } from './ImagemProps';

export type ProdutoProps = {
 id: number;
 nome: string;
 descricao: string;
 avaliacao: string;
 preco: number;
 estoque: number;
 status: boolean;
 imagens: ImagemProps[];
};

export interface ProdutosPropsToCart extends ProdutoProps {
 quantidade: number | 0;
}
