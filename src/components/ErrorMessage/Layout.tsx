import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return <span>{data.errorMessage}</span>;
}
