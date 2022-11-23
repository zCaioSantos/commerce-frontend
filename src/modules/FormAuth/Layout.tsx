import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <InputText
    data={{
     type: 'email',
     placeholder: 'E-mail',
     register: register('email'),
    }}
   />
   <InputText
    data={{
     type: 'password',
     placeholder: 'Senha',
     register: register('senha'),
    }}
   />
   <Button
    data={{
     title: 'Entrar',
     type: 'submit',
    }}
   />
  </Container>
 );
}
