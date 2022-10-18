import { ThemeProvider as Provider } from 'styled-components';
import { ThemeProviderProps } from './types';
import { light } from './theme';

export function ThemeProvider({ children }: ThemeProviderProps) {
 return <Provider theme={light}>{children}</Provider>;
}
