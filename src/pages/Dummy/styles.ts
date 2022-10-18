import styled from 'styled-components';

export const Container = styled.div`
 > a {
  display: block;
  margin-top: 16px;
  color: ${(props) => props?.theme?.colors?.text};
 }
`;
export const Button = styled.button.attrs({
 type: 'button',
})`
 padding: 8px 4px;
 margin-top: 4px;
`;
