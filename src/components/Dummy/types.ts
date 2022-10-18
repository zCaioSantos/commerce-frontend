export interface LayoutProps {
 data: {
  mocks: {
   welcome: string;
   firstInput: string;
  };
  name: string;
  handleChangeName: (name: string) => void;
 };
}
