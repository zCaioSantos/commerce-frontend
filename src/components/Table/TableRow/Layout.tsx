import { BsPencilSquare, BsRecordFill } from 'react-icons/bs';
import { Button, Options, Row, Slider, Stauts, Switch } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const { id } = data.content;

 return (
  <Row>
   <td>
    <Stauts className={data.content.status ? 'enable' : ''}>
     <BsRecordFill size={20} />
    </Stauts>
   </td>

   {data.columns.map((column, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <td key={index}>{data.content[column.value]}</td>
   ))}

   <td>
    <Options>
     <Button onClick={() => data.onDelete(id)}>
      <Switch>
       <Slider className={data.content.status ? 'enable' : ''} />
      </Switch>
     </Button>
     <Button onClick={() => data.onEdit(id)}>
      <BsPencilSquare />
     </Button>
    </Options>
   </td>
  </Row>
 );
}
