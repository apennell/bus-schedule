import React from 'react';
import PropTypes from 'prop-types';

import Trip from './Trip';

const propTypes = {
  busTrips: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  })).isRequired,
  handleSelectBus: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleSelectTrip: PropTypes.func,
  selectedTripId: PropTypes.number,
};

const defaultProps = {
  selectedTripId: null,
};

const Bus = ({ busTrips, index, handleSelectBus, handleSelectTrip, selectedTripId }) => (
  <div className={`bus${selectedTripId ? ' active' : ''}`} onClick={() => handleSelectBus(index)}>
    {busTrips.map((trip) => (
      <Trip
        key={`trip-${trip.id}`}
        handleSelectTrip={handleSelectTrip}
        selected={trip.id === selectedTripId}
        trip={trip}
      />
    ))}
  </div>
);

Bus.propTypes = propTypes;
Bus.defaultProps = defaultProps;

export default Bus;