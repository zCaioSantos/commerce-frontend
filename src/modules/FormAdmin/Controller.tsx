import { useForm } from 'react-hook-form';

import { Layout } from './Layout';
import { FormData } from './types';

export function Controller() {
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<FormData>();

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataAdmin: any) => console.log(dataAdmin),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} />;
}
