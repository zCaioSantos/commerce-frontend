import { BsRecordFill } from 'react-icons/bs';
import { Header } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Header>
   <tr>
    <th className="small" />
    {data.map((colum, index) => (
     <th key={index}>{colum.heading}</th>
    ))}
   </tr>
  </Header>
 );
}
