import React from 'react';
import PropTypes from 'prop-types';

import Trip from './Trip';

const propTypes = {
  handleSelectTrip: PropTypes.func.isRequired,
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
  selectedTrip: PropTypes.number,
};

const defaultProps = {
  selectedTrip: null,
};

const Bus = ({ handleSelectTrip, selectedTrip, trip }) => (
  <div className="bus">  
    <Trip 
      handleSelectTrip={handleSelectTrip}
      selected={trip.id === selectedTrip}
      trip={trip}
    />
  </div>
);

Bus.propTypes = propTypes;
Bus.defaultProps = defaultProps;

export default Bus;