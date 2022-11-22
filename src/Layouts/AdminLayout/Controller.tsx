import { Layout } from './Layout';
import { ControllerProps } from './type';

export function Controller({ children, onClick }: ControllerProps) {
 // eslint-disable-next-line react/no-children-prop
 return <Layout children={children} onClick={onClick} />;
}
