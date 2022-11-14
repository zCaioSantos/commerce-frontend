import { mocks } from './mocks';

export const useData = () => {
 const data = {
  columns: mocks.data.columns,
  response: mocks.data.response,
  onDelete: () => console.log('Deletou!'),
  onEdit: (id: string) => console.log(`Editando ${id}`),
 };
 return { data };
};
