import { CardInfoRequest } from '../../components/Cards/CardInfoRequest';
import { LandingPageLayout } from '../../Layouts/LandingPageLayout';
import { Content, RequestList, Title } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <LandingPageLayout>
   <Content>
    <Title>Meus Pedidos</Title>
    {data.isLoading && <strong>Carregando..</strong>}
    {!data.isLoading && data.response?.content === null ? (
     <strong>Você não tem nenhum pedido no momento.</strong>
    ) : (
     data.response?.content && (
      <RequestList>
       {data.response?.content.map((pedido) => (
        <CardInfoRequest key={pedido.id} data={pedido} />
       ))}
      </RequestList>
     )
    )}
   </Content>
  </LandingPageLayout>
 );
}
