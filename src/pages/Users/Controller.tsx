import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseProps } from '../../services/types/Response';
import { useColumns } from './data';
import { Layout } from './Layout';

export function Controller() {
 const columns = useColumns();
 const [data, setData] = useState<ResponseProps>();

 const response = () => {
  axios
   .get<ResponseProps>('http://localhost:5000/users/admins')
   .then((response) => {
    setData(response.data);
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
    onEdit: onEditAdmin,
    onDelete: onDeleteAdmin,
    onCreate: onCreateAdmin,
   }}
  />
 );
}
