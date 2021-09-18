import React from 'react';
import { QueryInformation } from '../components/';

function QueryInformationContainer({ minus, plus }) {
  return (
    <QueryInformation bg="lightsalmon">
      <QueryInformation.Button onClick={minus} bg="crimson">
        Minus -
      </QueryInformation.Button>
      <QueryInformation.Button onClick={plus} bg="green">
        Plus +
      </QueryInformation.Button>
    </QueryInformation>
  );
}

export default QueryInformationContainer;
