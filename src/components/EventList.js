import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports`, {
          params: {
            apiKey: process.env.REACT_APP_API_KEY
          }
        });
        setSports(response.data); // Ajustamos la respuesta para los datos disponibles
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSportsData();
  }, []);

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p>Error al cargar los eventos: {error}</p>;

  return (
    <div>
      <h2>Lista de Deportes Disponibles</h2>
      <ul>
        {sports.map((sport) => (
          <li key={sport.key}>
            <h3>{sport.title}</h3>
            <p>Descripcion: {sport.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;