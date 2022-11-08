import { Layout } from './Layout';
// import { useData } from './data';
import { ControllerProps } from './types';
export function Controller({ data }: ControllerProps) {
 //  const { data } = useData();
 return <Layout data={data} />;
}
