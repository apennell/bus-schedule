import React from 'react';
import PropTypes from 'prop-types';

import Trip from './Trip';

const propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

const Bus = ({ trip }) => (
  <div className="bus">  
    <Trip trip={trip} />
  </div>
);

Bus.propTypes = propTypes;

export default Bus;