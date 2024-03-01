"use strict"

import express from "express"

const app = express()

const port = 3000
/*
function hello(req, resp){
    resp.status(200).send("Hello from server")
}

arrow function/función anónima:
sólo aplica para un funcionamiento muy específico y no lo usarás mucho
*/
//sería lo mismo si ponemos hello dentro del .get
app.get("/api/hello", (req, resp) =>{
    console.log("Hello from server")
    resp.status(200).send("Hola Mundo")
})

app.get("/api/hello/:name", (req, resp) => {
    console.log(req.params)
    resp.status(200).send(`Hola ${req.params.name}`)
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})