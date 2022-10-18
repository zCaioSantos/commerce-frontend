import { mocks } from './mocks';
import { useName, useChangeName } from './hooks';

export const useData = () => {
 const { name } = useName();
 const { handleChangeName } = useChangeName();

 const data = {
  mocks: {
   welcome: mocks.welcome,
   firstInput: mocks.firstInput,
  },
  name,
  handleChangeName,
 };
 return { data };
};
