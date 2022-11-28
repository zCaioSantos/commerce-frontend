import { BsThreeDotsVertical } from 'react-icons/bs';

import { Content, Dropdown } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Dropdown>
   <button type="button">
    <BsThreeDotsVertical />
   </button>
   <Content>
    {data.map((option) => (
     <button type="button" onClick={option.onClick}>
      {option.icon}
      <span>{option.name}</span>
     </button>
    ))}
   </Content>
  </Dropdown>
 );
}
