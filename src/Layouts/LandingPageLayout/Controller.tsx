import { Layout } from './Layout';
import { ControlerProps } from './types';

export function Controller({ children }: ControlerProps) {
 // eslint-disable-next-line react/no-children-prop
 return <Layout children={children} />;
}
