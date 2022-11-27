import { DropdownInfo } from '../../DropdownInfo';
import { Container, Content } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <Content>
    <div className="left">
     <strong>
      {data.andress?.logradouro}, {data.andress?.numero}
     </strong>
     <span>
      CEP: {data.andress?.cep} - {data.andress?.cidade}, {data.andress?.uf}
     </span>
    </div>
    <DropdownInfo
     data={[
      {
       name: 'Deletar',
       onClick: () => data.onDelet(data.andress.endereco_id),
      },
      {
       name: 'Editar',
       onClick: () => data.onEdit(data.andress),
      },
     ]}
    />
   </Content>
  </Container>
 );
}
