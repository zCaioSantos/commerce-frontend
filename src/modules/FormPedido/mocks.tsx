import { BsCreditCard2Back, BsDiamond, BsPaypal, BsUpc } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';

export const mocks = {
 paymentMethods: [
  {
   icon: <BsCreditCard2Back size={25} />,
   label: 'Cartão',
  },
  {
   icon: <BsUpc size={25} />,
   label: 'Boleto',
  },
  {
   icon: <BsDiamond size={25} />,
   label: 'PIX',
  },
  {
   icon: <BsPaypal size={25} />,
   label: 'PayPal',
  },
 ],
 shipping: [
  {
   icon: <FaTruck size={25} />,
   label: 'Sedex',
   value: 20,
  },
  {
   icon: <FaTruck size={25} />,
   label: 'Ecommerce',
   value: 50,
  },
  {
   icon: <FaTruck size={25} />,
   label: 'Correios',
   value: 15,
  },
 ],
};
