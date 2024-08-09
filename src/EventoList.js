// src/components/EventList.js

import React, { useState, useEffect } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container">
      <h1>Eventos Deportivos</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.name}</h2>
            <p>Fecha: {new Date(event.date).toLocaleDateString()}</p>
            <p>Equipos: {event.teams.join(' vs ')}</p>
            <p>Ubicación: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;