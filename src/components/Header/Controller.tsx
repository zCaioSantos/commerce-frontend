import { Layout } from './Layout';
import { useData } from './data';
import { ControlerProps } from './types';

export function Controller({ onClick }: ControlerProps) {
 const { data } = useData();
 return <Layout data={data} onClick={onClick} />;
}
