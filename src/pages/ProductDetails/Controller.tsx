import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ProdutoProps } from '../../services/types/ProdutoProps';
import { Layout } from './Layout';

export function Controller() {
 const { id } = useParams();

 const { data, isFetched, isLoading } = useQuery(
  ['getProductDetail'],
  async () => {
   const response = await axios.get<ProdutoProps>(
    `http://localhost:5000/produto/${id}`
   );
   return response.data;
  }
 );

 return (
  <Layout
   data={{
    response: data,
    isLoading,
    isFetched,
   }}
  />
 );
}
