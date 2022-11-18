export interface ControlerProps {
 data?: ProdutoProps[];
}

export type LayoutProps = ControlerProps;

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

export type ImagemProps = {
 url: number[];
};
