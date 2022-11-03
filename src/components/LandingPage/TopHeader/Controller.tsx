import { useData } from './data';
import { Layout } from './Layout';

export function Controller() {
 const { data } = useData();
 return <Layout data={data} />;
}
