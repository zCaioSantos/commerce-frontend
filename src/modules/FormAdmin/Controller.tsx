import { useForm } from 'react-hook-form';
import { AdminProps } from '../../pages/Users/types';

import { Layout } from './Layout';

export function Controller() {
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<AdminProps>();

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataAdmin: AdminProps) => console.log(dataAdmin),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} />;
}
