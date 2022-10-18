import { useDummy } from '../../states/Dummy';

export const useName = () => {
 const dummy = useDummy((state) => [state.dummy]);
 const name = dummy ? `, ${dummy}!` : '!';
 return { name };
};

export const useChangeName = () => {
 const setDummy = useDummy((state) => state.setDummy);
 const handleChangeName = (name: string) => {
  setDummy(name);
 };
 return {
  handleChangeName,
 };
};
