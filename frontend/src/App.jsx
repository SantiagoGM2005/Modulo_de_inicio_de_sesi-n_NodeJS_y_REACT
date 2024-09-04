import { useState } from 'react'

import './App.css'

function App() {
  const [usuario,setUsuario] = useState("")
  const [contraseña,setContraseña] = useState("")
  const [logueo,setlogueado] = useState(false)
 
  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }
  
  function cambiarContraseña(evento){
    setContraseña(evento.target.value)
  }
  
  async function Ingresar(){
    const peticion = await fetch("http://localhost:3000/login?usuario=" + usuario + "&contraseña=" + contraseña)

    if (peticion.ok){
      alert( "usuario conectado")
      setlogueado(true)
    } else{
      alert( "usuario incorrecto")
    }
    }
  return (
    <>
      <h1>INICIO DE SESIÓN</h1>
      <input placeholder='Usuario' type="text" name='usuario' id='usuario' value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Contraseña' type="password" name='contraseña' id='contraseña' value={contraseña} onChange={cambiarContraseña} />
      <button onClick={Ingresar}>Ingresar</button>
      
    </>
  )
}

export default App
