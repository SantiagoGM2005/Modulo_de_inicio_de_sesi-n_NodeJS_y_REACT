import express from "express"
import mysql from "mysql2/promise"; 
import cors from "cors"




// Creando nuestro servidor
const app = express()
app.use(cors());

//Conexión a base de datos 
const pool = mysql.createPool({
  host:"localhost",
  user: "root",
  database: "adso",
});

// Crear una consulta básica

app.get("/login",async (req, res)=>{

  const datos = req.query
  try {
    const [results, fields] = await pool.query(
      "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `contraseña` = ?",
      [datos.usuario,datos.contraseña]



    );
  if (results.length > 0 ){
    res.status(200).send("inicio de sesión correctamente")
  }else{

    res.status(401).send("no inició sesión")
  }


    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  console.log(datos)

} )   

app.get("/", (req, res)=> res.send("hey esto funciona"))


//ruta del local

app.listen(3000)
console.log("servidor funcionando en el puerto 3000", 3000 )


// configuración para insertar las imagenes y los estilos

