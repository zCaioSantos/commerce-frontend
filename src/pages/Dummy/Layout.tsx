import { AdminLayout } from '../../Layouts/AdminLayout';
import { FormProduct } from '../../modules/FornProduct';

export function Layout() {
 return (
  <AdminLayout onClick={() => console.log('Novo Cliente')}>
   <FormProduct />
  </AdminLayout>
 );
}
