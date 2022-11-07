import { ContainerInput } from './style';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return <ContainerInput type={data.type} placeholder={data.placeholder} />;
}
