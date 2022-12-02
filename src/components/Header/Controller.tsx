import { useData } from './data';
import { Layout } from './Layout';
import { ControlerProps } from './types';

export function Controller({ onClick, disableButton }: ControlerProps) {
 const { data } = useData();
 return <Layout data={data} onClick={onClick} disableButton={disableButton} />;
}
