import { mocks } from './mocks';

export const useColumns = () => {
 const data = {
  columns: mocks.data.columns,
 };
 return { data };
};
