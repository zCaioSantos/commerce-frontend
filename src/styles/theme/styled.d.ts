import 'styled-components';

declare module 'styled-components' {
 export interface DefaultTheme {
  name: 'light' | 'dark';
  colors: {
   background: string;
   text: string;
  };
 }
}
