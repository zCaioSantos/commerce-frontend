import { mocks } from './mocks';

export const useData = () => {
 const data = {
  columns: mocks.data.columns,
  data: mocks.data.data,
  onDelete: () => console.log('Deletou!'),
  onEdit: (id: string) => console.log(`Editando ${id}`),
 };
 return { data };
};
