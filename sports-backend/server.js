// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Ruta para obtener eventos deportivos
app.get('/api/events', (req, res) => {
  const events = [
    {
      _id: 1,
      name: "Partido de Fútbol",
      date: "2023-12-01",
      teams: ["Team A", "Team B"],
      location: "Estadio A"
    },
    {
      _id: 2,
      name: "Torneo de Baloncesto",
      date: "2023-11-15",
      teams: ["Team C", "Team D"],
      location: "Estadio B"
    }
  ];
  res.json(events);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});