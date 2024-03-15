import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import TableComponent from "./components/TableComponent";
import RegisterComponent from "./components/RegisterComponent";
import "./App.css"
function App() {

  const [contador, setContador] = useState(5);
  
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
    Descripcion: "papa, arroz, huevo"},
    {Id:"6",
    Nombre:"Shampoo",
    Descripcion: "Lava el cabello"},
    {Id:"7",
    Nombre:"Acondicionador",
    Descripcion: "Sella las puntas del cabello"},
    {Id:"8",
    Nombre:"Aromatica",
    Descripcion: "Infucion de yerbas"},
    {Id:"9",
    Nombre:"Cafe Instantaneo",
    Descripcion: "Facilita la preparacion del cafe"},
    {Id:"10",
    Nombre:"Comedor",
    Descripcion: "vidrio plano"},
    {Id:"11",
    Nombre:"Computador",
    Descripcion: "maquina para desarrollar actividades diferentes"},
    {Id:"12",
    Nombre:"Cabina",
    Descripcion: "Equipo de sonido"},
    {Id:"13",
    Nombre:"Cobija",
    Descripcion: "Cobertor de tela largo y rectangular, epleado para abrigar"},
    {Id:"14",
    Nombre:"Escoba",
    Descripcion: "Barre la mugre"},
    {Id:"15",
    Nombre:"Auriculares",
    Descripcion: "trasmiten sonido"},
    {Id:"16",
    Nombre:"Aguacate",
    Descripcion: "Fruta"},
    {Id:"17",
    Nombre:"Salchichón",
    Descripcion: "Embutido de carne"},
    {Id:"18",
    Nombre:"Frijol",
    Descripcion: "Grano"},
    {Id:"19",
    Nombre:"Lentejas",
    Descripcion: "Grano"},
    {Id:"20",
    Nombre:"Arroz",
    Descripcion: "Grano"}
  ];
  const handleContador = (e)=>{
    setContador(Number(e.target.value))
  }
  const opContador = [5,10,15,20]
  const [buscador, setBuscador] = useState('');
  const traer = (inpvalue) => {setBuscador(inpvalue);};
  const filtrarPersonas = personas.filter(
    (persona) =>
      persona.Id.toLowerCase().includes(buscador.toLowerCase()) ||
      persona.Nombre.toLowerCase().includes(buscador.toLowerCase()) ||
      persona.Descripcion.toLowerCase().includes(buscador.toLowerCase())
  ).slice(0,contador)

  
  return (
    <>
      <SearchComponent traer={traer} />
      <div className="f">
        <div className="dd">
        <h5>Filtrar</h5>
        <select value={contador} name="" id="" onChange={handleContador} className="ll">
          {opContador.map((opcion)=>(
          <option key={opcion} value={opcion}>{opcion}</option>
          ))}

        </select>  
        </div>

      </div>
      <TableComponent personas={filtrarPersonas} />
      <RegisterComponent
      tregistros={filtrarPersonas.length}
      tpersonas={personas.length}
      ></RegisterComponent>
      
    </>
  );
}
export default App;