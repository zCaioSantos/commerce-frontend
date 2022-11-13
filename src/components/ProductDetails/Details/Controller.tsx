import { Layout } from './Layout';
import { ControllerProps } from './type';

export function Controller({ data }: ControllerProps) {
 return <Layout data={data} />;
}
