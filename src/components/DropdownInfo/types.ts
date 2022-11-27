import { ReactNode } from 'react';

export interface ControllerProps {
 data: Option[];
}

export type LayoutProps = ControllerProps;

export type Option = {
 icon?: ReactNode;
 name: string;
 onClick?: () => void;
};
