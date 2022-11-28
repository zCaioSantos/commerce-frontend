import { RingLoader } from 'react-spinners';
import { HrVertical } from '../../components/HrVertical';
import { ListAndress } from '../../components/ListAndress';
import { LandingPageLayout } from '../../Layouts/LandingPageLayout';
import { FormProfile } from '../../modules/FormProfile';
import {
 ContainerLeft,
 ContainerLoading,
 ContainerRight,
 Content,
} from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <LandingPageLayout>
   {data.isLoading && (
    <ContainerLoading>
     <RingLoader color="#F29773" />
    </ContainerLoading>
   )}
   {!data.isLoading && (
    <Content>
     <ContainerLeft>
      <FormProfile data={data?.response} />
     </ContainerLeft>
     <HrVertical />
     <ContainerRight>
      <ListAndress data={data?.response?.enderecos} />
     </ContainerRight>
    </Content>
   )}
  </LandingPageLayout>
 );
}
