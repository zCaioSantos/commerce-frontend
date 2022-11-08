import { ReactNode } from 'react';
export interface ControllerProps {
 children: ReactNode;
 onClick?: () => void;
}

export type LayoutProps = ControllerProps;
