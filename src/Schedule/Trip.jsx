import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleSelectTrip: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

const Trip = ({ handleSelectTrip, selected, trip: { id, startTime, endTime } }) => {
  const style = {
    left: `${startTime}px`,
    width: `${endTime - startTime}px`,
  };
  const tripClass = `trip${selected ? ' active' : ''}`;

  return (
    <div
      onClick={() => handleSelectTrip(selected ? null : id)}
      className={tripClass}
      style ={style}
    >
      {id}
    </div>
  );
};

Trip.propTypes = propTypes;
 
export default Trip;
