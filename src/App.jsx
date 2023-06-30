
import './App.css'
import PropTypes from 'prop-types'

const titulo = "Este es mi titulo";
const parrafo = "Esto es un parrafo";
const info = {
  nombre: "Luis Romano",
  edad: 39
}

const App = ( { nombre, lugar, valor } ) => {
  return (
    <>
      <h1>{titulo}</h1>
      <p>{parrafo}</p>
      <code>{JSON.stringify(info)}</code>
      <p>{nombre}</p>
      <p>{lugar}</p>
      <p>{valor}</p>
    </>
    
  )
}

App.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
}

App.defaultProps = {
  nombre: "Sin nombre",
  lugar: "Sin lugar",
  valor: 0,
}

export default App
