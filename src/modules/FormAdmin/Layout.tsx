import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/InputText';
import { ButtonToggle, ContainerForm } from './style';

export function Layout() {
 return (
  <ContainerForm>
   <InputText
    data={{
     type: 'text',
     placeholder: 'Nome',
    }}
   />
   <InputText
    data={{
     type: 'email',
     placeholder: 'E-mail',
    }}
   />
   <InputText
    data={{
     type: 'text',
     placeholder: 'CPF',
    }}
   />
   <InputText
    data={{
     type: 'text',
     placeholder: 'Telefone',
    }}
   />
   <InputText
    data={{
     type: 'date',
    }}
   />
   <div className="toggle">
    <ButtonToggle type="button" className="select">
     Estoquista
    </ButtonToggle>
    <ButtonToggle type="button">Admin</ButtonToggle>
   </div>
   <Button
    data={{
     title: 'Cadastrar',
     type: 'submit',
     onClick: () => console.log('Clicou'),
    }}
   />
  </ContainerForm>
 );
}
