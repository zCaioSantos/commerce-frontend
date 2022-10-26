import { Button, Row } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const id = data.data[data.columns[0].value];

 return (
  <Row>
   {data.columns.map((column, index) => (
    <td key={index}>{data.data[column.value]}</td>
   ))}

   <td>
    <Button onClick={() => data.onEdit(id)}>EDIT</Button>
   </td>
  </Row>
 );
}
