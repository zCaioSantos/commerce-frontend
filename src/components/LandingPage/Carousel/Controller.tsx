import { Layout } from './Layout';
import { ControlerProps } from './types';

export function Controller({ data }: ControlerProps) {
 //  const { data } = useData();
 return <Layout data={data} />;
}
