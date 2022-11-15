import { ReactNode, RefObject } from 'react';

export type AlignProps = 'flex-start' | 'center' | 'flex-end';

export interface LayoutProps {
 data: {
  alignModal: AlignProps;
  showCloseButton: boolean;
  ref: RefObject<HTMLDivElement>;
 };
 children: ReactNode;
}
