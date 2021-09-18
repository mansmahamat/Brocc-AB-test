import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 100px;
  background-color: ${(props) => props.bg};
`;

export const Title = styled.h1`
  text-align: center;
`;
export const TextFetchingStatus = styled.p`
  font-size: 20px;
  color: ${(props) => props.color};
  text-align: center;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  padding: 20px 50px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid salmon;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px 0px;
  border-top: 1px solid salmon;
  :first-of-type {
    border-top: none;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 4px solid lightgrey;
  border-right: 4px solid lightgrey;
  border-bottom: 4px solid lightgrey;
  border-left: 4px solid lightsalmon;
  background: transparent;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
`;
