import { Container } from './styles';
import type { LayoutProps } from './types';

export function Layout({
 data: { mocks, name, handleChangeName },
}: LayoutProps) {
 return (
  <Container>
   <span>
    {mocks.welcome}
    {name}
   </span>
   <form>
    <label htmlFor="name" className="name-of-user-label">
     {mocks.firstInput}
     <input
      id="name"
      type="text"
      onChange={(e) => handleChangeName(e.target.value)}
      className="name-of-user-input"
      placeholder="Nome"
     />
    </label>
   </form>
  </Container>
 );
}
