import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormAdmin } from '../../modules/FormAdmin';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <AdminLayout onClick={() => console.log('Novo Cliente')}>
   <FormAdmin />
  </AdminLayout>
 );
}
