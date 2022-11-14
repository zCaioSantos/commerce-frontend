import { Table } from '../../components/Table/Table';
import { AdminLayout } from '../../Layouts/AdminLayout';
import { ContainerUsers } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <AdminLayout onClick={data.onCreate}>
   <ContainerUsers>
    <Table data={data} />
   </ContainerUsers>
  </AdminLayout>
 );
}
