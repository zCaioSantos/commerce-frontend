import styled from 'styled-components';
import { Banner } from '../../../assets/images';

export const ContainerBanner = styled.div`
 width: 100%;
 height: 650px;

 padding: 9.5rem 7.8125rem;

 display: flex;
 flex-direction: column;
 gap: 0.125rem;

 background-image: url(${Banner});
 background-position: center;
 background-size: cover;

 font-family: 'Lato';
 color: white;

 h1 {
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
 }

 h2 {
  font-size: 2.25rem;
  font-weight: 400;
  margin: 0;
 }

 h3 {
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
 }
`;

export const MaxButton = styled.div`
 margin-top: 4.5rem;
 max-width: 18.125rem;
`;
