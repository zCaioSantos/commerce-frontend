import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseProps } from '../../services/types/Response';
import { useColumns } from './data';
import { Layout } from './Layout';

export function Controller() {
 const columns = useColumns();
 const [data, setData] = useState<ResponseProps>();
 const [loading, setLoading] = useState(false);

 const response = () => {
  setLoading(true);
  axios
   .get<ResponseProps>('http://localhost:5000/users/admins')
   .then((responseData) => {
    setData(responseData.data);
   })
   .catch((err) => console.log(err))
   .finally(() => {
    setLoading(false);
   });
 };

 const onEditAdmin = (id: string) => {
  console.log(`Editar ${id}`);
 };

 const onDeleteAdmin = (id: string) => {
  console.log(`Deletar ${id}`);
 };

 const onCreateAdmin = () => {
  console.log('Criar');
 };

 useEffect(() => {
  response();
 }, []);

 return (
  <Layout
   data={{
    columns: columns.data.columns,
    response: data,
    loading,
    onEdit: onEditAdmin,
    onDelete: onDeleteAdmin,
    onCreate: onCreateAdmin,
   }}
  />
 );
}
