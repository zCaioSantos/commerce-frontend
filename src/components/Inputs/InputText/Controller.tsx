import { Layout } from './Layout';
import { ControllerProps } from './type';

// import { useData } from './data';
export function Controller({ data }: ControllerProps) {
 // const { data } = useData();
 return <Layout data={data} />;
}
