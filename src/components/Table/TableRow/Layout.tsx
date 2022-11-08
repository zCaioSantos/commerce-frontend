import { BsRecordFill } from 'react-icons/bs';
import { Button, Options, Row, Stauts } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const id = data.content[data.columns[0].value];

 return (
  <Row>
   <td>
    <Stauts className={data.content.status ? 'enable' : ''}>
     <BsRecordFill size={20} />
    </Stauts>
   </td>

   {data.columns.map((column, index) => (
    <td key={index}>{data.content[column.value]}</td>
   ))}

   <td>
    <Options>
     <Button onClick={() => data.onEdit(id)}>EDIT</Button>
     <Button onClick={() => data.onDelete(id)}>DELET</Button>
    </Options>
   </td>
  </Row>
 );
}
