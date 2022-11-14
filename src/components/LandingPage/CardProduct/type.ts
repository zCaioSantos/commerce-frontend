export interface ControllerProps {
 data: {
  nome: string;
  preco: number;
  image?: string;
  navigate: () => void;
 };
}

export type LayotProps = ControllerProps;
