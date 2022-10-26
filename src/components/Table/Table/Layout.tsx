import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TableHeader data={data.columns} />
   <tbody>
    {data.data.map((item, index) => (
     <TableRow
      key={index}
      data={{
       columns: data.columns,
       data: item,
       onDelete: data.onDelete,
       onEdit: data.onEdit,
      }}
     />
    ))}
   </tbody>
  </Container>
 );
}
