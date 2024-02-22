import './App.css';
import Vehiculos from './componentes/Vehiculos';
function App(props) {
    return (
        <div className="App">
    <div className="contenedor-principal">
      <h1>VEHICULOS MAS RAPIDOS</h1>
      <Vehiculos
        nombre='auto'
        pais='Inglaterra'
        imagen='auto'
        especificacion='Automovil'
        tipo='Deportivo'
        resena='Automovil de calle deportivo que alcanza una velocidad de 400 mph de 0 a 100'
      />
      <Vehiculos
        nombre='avion'
        pais='Rusia'
        imagen='avion'
        especificacion='Aeronave'
        tipo='Militar'
        resena='Aeronave de combate militar desarrollada por el ejercito Ruso'
      />
      <Vehiculos
        nombre='barco'
        pais='Grecia'
        imagen='barco'
        especificacion='embarcacion'
        tipo='Deportivo'
        resena='Barco deportivo exclusivamente para competencias que alcanzan 150 kmh'
      />
    </div> 
    </div>
  );
}

export default App;
