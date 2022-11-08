import { Layout } from './Layout';
import { ControlerProps } from './types';

export function Controller({ data }: ControlerProps) {
 return <Layout data={data} />;
}
