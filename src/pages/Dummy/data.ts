import { mocks } from './mocks';

export const useData = () => {
 const data = {
  msg: mocks.msg,
 };
 return { data };
};
