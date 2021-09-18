import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bg};
`;

export const Button = styled.button`
  color: ${(props) => props.bg};
  font-size: 25px;
  margin: 16px;
  padding: 14px 36px;
  border: 3px solid ${(props) => props.bg};
  border-radius: 20px;
`;
