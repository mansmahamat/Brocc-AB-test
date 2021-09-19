import React from 'react';
import PropTypes from 'prop-types';
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

QueryInformationContainer.propTypes = {
  minus: PropTypes.func,
  plus: PropTypes.func,
};

export default QueryInformationContainer;
