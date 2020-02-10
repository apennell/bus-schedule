import React, { useState } from 'react';

import initialTrips from './bus-scheduling-input.json';
import Bus from './Bus';
import './styles.css';

const Schedule = () => {
  const [buses, setBuses] = useState(initialTrips.map((trip) => [trip]));
  const [selectedTripId, setSelectedTripId] = useState(null);

  const handleSelectBus = (busIndex) => {
    if (!selectedTripId) return;

    const busesCopy = buses.map((bus) => (bus.map((trip) => trip)));
    const selectedBus = busesCopy[busIndex];
    const currentBusIndex = buses.findIndex((bus) => (
      bus.find((trip) => trip.id === selectedTripId)
    ));
    const selectedTripIndex = busesCopy[currentBusIndex].findIndex(
      (trip) => trip.id === selectedTripId
    );
    const selectedTrip = busesCopy[currentBusIndex].splice(selectedTripIndex, 1)[0];

    if (selectedBus) {
      const overlap = (trip) => (
        selectedTrip.startTime === trip.startTime
        || (selectedTrip.startTime < trip.startTime && selectedTrip.endTime > trip.startTime)
        || (selectedTrip.startTime > trip.startTime && selectedTrip.startTime < trip.endTime)
      );
      const scheduleConflict = selectedBus.find((trip) => overlap(trip));
      if (!!scheduleConflict) { return; }
      selectedBus.push(selectedTrip);
    } else {
      busesCopy.push([selectedTrip]);
    }

    if (busesCopy[currentBusIndex].length === 0) {
      busesCopy.splice(currentBusIndex, 1);
    }

    setBuses(busesCopy);
    setSelectedTripId(null);
  };

  const handleSelectTrip = (e, id) => {
    e.stopPropagation();
    setSelectedTripId(selectedTripId === id ? null : id);
  };

  const getTimes = (trips) => (
    trips.reduce((acc, trip) => (
      {
        start: Math.min(acc.start, trip.startTime),
        end: Math.max(acc.end, trip.endTime),
      }
    ), { start: 1440, end: 0 })
  );

  return (
    <div className="container">
      <h1>38 Geary Schedule</h1>
      <div className="times">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((time) => (
          <p style={{ left: `${(time * 60) + 155}px`}}>{time}:00</p>
        ))}
      </div>
      {buses.map((bus, index) => (
        <Bus
          index={index}
          key={`bus-${bus[0].id}`}
          busTrips={bus}
          handleSelectBus={handleSelectBus}
          handleSelectTrip={handleSelectTrip}
          selectedTripId={selectedTripId}
          times={getTimes(bus)}
        />
      ))}
      {selectedTripId ?
        <Bus index={buses.length} busTrips={[]} handleSelectBus={handleSelectBus} />
      : null}
    </div>
  );
}
 
export default Schedule;
