import React, { useState } from 'react';

import Bus from './Bus';
import initialTrips from './bus-scheduling-input.json';
import './styles.css';

const Schedule = () => {
  const [trips, setTrips] = useState(initialTrips);
  const [selectedTrip, setSelectedTrip] = useState();

  return (
    <div className="container">
      <h1>38 Geary Schedule</h1>
      {trips.map((trip) => (
        <Bus
          key={`bus-${trip.id}`}
          handleSelectTrip={setSelectedTrip}
          selectedTrip={selectedTrip}
          trip={trip}
        />
      ))}
    </div>
  );
}
 
export default Schedule;
