import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ data }: ControllerProps) {
 return <Layout data={data} />;
}
