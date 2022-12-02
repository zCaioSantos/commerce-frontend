import { ReactNode } from 'react';

export interface ControllerProps {
 children: ReactNode;
 onClick?: () => void;
 disableButton?: boolean;
}

export type LayoutProps = ControllerProps;
