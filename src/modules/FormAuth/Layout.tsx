import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { Container, ErrrorMessage } from './styles';
import { LayoutProps } from './types';

export function Layout({
 data: {
  hookForm: { register, handleSubmit, onSubmit, errors },
 },
}: LayoutProps) {
 return (
  <Container onSubmit={(e) => handleSubmit(onSubmit)(e)}>
   <InputText
    data={{
     type: 'email',
     placeholder: 'E-mail',
     register: register('email', {
      required: {
       value: true,
       message: 'Informe um e-mail.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.email?.message}</ErrrorMessage>

   <InputText
    data={{
     type: 'password',
     placeholder: 'Senha',
     register: register('senha', {
      required: {
       value: true,
       message: 'Informe sua senha.',
      },
     }),
    }}
   />

   <ErrrorMessage>{errors.senha?.message}</ErrrorMessage>

   <Button
    data={{
     title: 'Entrar',
     type: 'submit',
    }}
   />
  </Container>
 );
}
