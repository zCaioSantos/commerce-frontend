import styled from 'styled-components';

export const Container = styled.main`
 min-height: 100%;
 display: flex;
 flex-direction: column;
`;

export const Content = styled.article`
 height: 100%;
 flex: 1;

 display: flex;
 align-items: center;
 justify-content: center;
 gap: 3.9375rem;

 padding: 1.5rem 7.8125rem;
 background-color: #f6f6f6;
`;

export const ImagemContainer = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 overflow: hidden;
`;

export const ImagemList = styled.ul`
 margin-top: 1.25rem;
 display: flex;
 list-style: none;
 gap: 0.75rem;

 > li {
  width: 6.25rem;
  cursor: pointer;

  > img {
   width: 100%;
   object-fit: cover;
  }
 }
`;

export const Capa = styled.div`
 width: 445px;
 border-radius: 15px;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0.75rem;

 > img {
  width: 100%;
  object-fit: cover;
 }
`;

export const InfoProduct = styled.section`
 display: flex;
 flex-direction: column;
 max-width: 800px;
`;

export const OptionContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;

 > button {
  max-width: 300px;
 }
`;

export const NameCommerce = styled.span`
 color: #f79f7c;
 font-weight: 700;
 display: block;
 margin-bottom: 18px;
 text-transform: uppercase;
 font-size: 0.8em;
 letter-spacing: 2px;
`;

export const Name = styled.strong`
 font-family: 'Lato';
 font-size: 2.75em;
 margin-bottom: 34px;
 line-height: 1.1em;
 padding-top: 1px;
`;

export const Description = styled.p`
 color: #68707d;
 font-size: 1em;
 margin-bottom: 25px;
 line-height: 1.64em;
 letter-spacing: 0.1px;
 width: 90%;
`;

export const Price = styled.strong`
 color: #1d2025;
 font-weight: 700;
 font-size: 1.8em;
 margin-right: 15px;
 letter-spacing: 0.8px;
 margin-bottom: 37px;
`;
