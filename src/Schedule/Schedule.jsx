import React from 'react';

import Bus from './Bus';
import trips from './bus-scheduling-input.json';
import './styles.css';

const Schedule = () => {  
  return (
    <div className="container">
      <h1>38 Geary Schedule</h1>
      {trips.map((trip) => (
        <Bus key={`bus-${trip.id}`} trip={trip} />
      ))}
    </div>
  );
}
 
export default Schedule;
