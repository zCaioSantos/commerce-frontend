import { Button, ContainerInput, Input } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <ContainerInput>
   <Button
    type="button"
    onClick={() => {
     // eslint-disable-next-line no-unused-expressions
     data.value > 1 ? data.onClick(data.value - 1) : '';
    }}
    disabled={data.value === data.max}
   >
    -
   </Button>
   <Input type="number" value={data.value} />
   <Button
    type="button"
    onClick={() => data.onClick(data.value + 1)}
    disabled={data.value === data.max}
   >
    +
   </Button>
  </ContainerInput>
 );
}
