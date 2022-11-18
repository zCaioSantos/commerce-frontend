import { ContainerInput } from './style';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <ContainerInput
   title={data.placeholder}
   type={data.type}
   placeholder={data.placeholder}
   onChange={(e) => data.getInputValue(e.target.value)}
   value={data.value}
  />
 );
}
