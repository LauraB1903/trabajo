import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import TableComponent from "./components/TableComponent";
import "./App.css"

function App() {
  const personas = [
    {Id:"1",
    Nombre:"Salchipapa",
    Descripcion: "Papa y salchicha"},
    {Id:"2",
    Nombre:"Perro",
    Descripcion: "Pan, salchicha, ripio, salsas"},
    {Id:"3",
    Nombre:"Hamburguesa",
    Descripcion: "Pan, carne, tomate"},
    {Id:"4",
    Nombre:"Punta",
    Descripcion: "Pan, queso"},
    {Id:"5",
    Nombre:"Papa rellena",
    Descripcion: "papa, arroz, huevo"}
  ];

  const [buscador, setBuscador] = useState('');

  const traer = (inpvalue) => {
    setBuscador(inpvalue);
  };

  const filtrarPersonas = personas.filter(
    (persona) =>
      persona.Id.toLowerCase().includes(buscador.toLowerCase()) ||
      persona.Nombre.toLowerCase().includes(buscador.toLowerCase()) ||
      persona.Descripcion.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <>
      <SearchComponent traer={traer} />
      <TableComponent personas={filtrarPersonas} />
      
    </>
  );
}

export default App;