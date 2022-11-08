import { Layout } from './Layout';
import { ControllerProps } from './type';
export function Controller({ children, onClick }: ControllerProps) {
 return <Layout children={children} onClick={onClick} />;
}
