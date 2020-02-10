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
  times: PropTypes.shape({
    end: PropTypes.number,
    start: PropTypes.number,
  }),
};

const defaultProps = {
  selectedTripId: null,
  times: {},
};

const convertTime = (minsFromMidnight) => {
  const hour = Math.floor(minsFromMidnight / 60);
  const minutes = (`0${minsFromMidnight % 60}`).slice(-2);
  return `${hour}:${minutes}`;
};

const Bus = ({
  busTrips,
  index,
  handleSelectBus,
  handleSelectTrip,
  selectedTripId,
  times: { end, start },
}) => (
  <div className={`bus${selectedTripId ? ' active' : ''}`} onClick={() => handleSelectBus(index)}>
    {busTrips.length ?
      <p className="bus-name">
        Bus {index + 1} <small>{convertTime(start)} - {convertTime(end)}</small>
      </p>
    :
      <p className="bus-name">New Bus</p>
    }
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