export interface ControllerProps {
 data: {
  nome: string;
  preco: number;
  image?: any;
  navigate: () => void;
 };
}

export type LayotProps = ControllerProps;
