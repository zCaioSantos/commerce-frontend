import { Banner } from "../../../assets/images"
import { Sec, Art, Ban } from "../Banner/styles";

export function Layout(){
  return(
    <Sec>
      <Ban src={Banner}>
      </Ban>
        <Art>
          <span>Conheça nossos exclusivos importados!</span>
          <h2>Aproveite nossas ofertas de novembro black!</h2>
          <small>Valores únicos para esse momento de copa</small>
        </Art>
    </Sec>
  );
}