import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface ControllerProps {
 data: {
  method: MethodProps;
  register: UseFormRegisterReturn<'metodo_pagamento'>;
 };
}

export type LayoutProps = ControllerProps;

export type MethodProps = {
 icon: ReactNode;
 label: string;
};
