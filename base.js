import { createConnection } from "mysql";

const db= createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "pacientes"
});

// Mensaje de conexión a base de datos//

db.connect((err)=>{
    if(err){
        console.error ("no concestado a la base de datos", err);
        return
    }
    console.log("conexión exitosa")
})

// Consultar a la base de datos//

db.query("SELECT * FROM `usuarios`",(err, rows)=>{
   
    if(err){
        console.error ("error de la consulta", err);
        return
    }
    console.log("los resultados de la consulta")
    console.log (rows)

} )

