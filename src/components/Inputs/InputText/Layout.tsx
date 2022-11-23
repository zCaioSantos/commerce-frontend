import { ContainerInput } from './style';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <ContainerInput
   title={data.placeholder}
   type={data.type}
   placeholder={data.placeholder}
   // eslint-disable-next-line react/jsx-props-no-spreading
   {...data.register}
  />
 );
}
