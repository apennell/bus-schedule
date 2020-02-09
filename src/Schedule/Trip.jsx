import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

const Trip = ({ trip: { id, startTime, endTime } }) => (
  <div className="trip">{id}</div>
);

Trip.propTypes = propTypes;
 
export default Trip;
