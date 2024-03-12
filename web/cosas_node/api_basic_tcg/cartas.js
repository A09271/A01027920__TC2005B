
"use strict"

import express from "express"

let cartas = [];

const app = express();

const port = 3000

app.use(express.json())

app.get('/api/cartas', (req, res) => {
    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        res.status(200).send(cartas);
    }
});

app.get("/api/cartas/:id", (req, res) =>{
    const cartasID = req.params.id;

    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        for (let i = 0; i < cartas.length; i++) {
            if (cartasID == cartas[i].id) {
                res.status(200).send(`Nombre de la carta: ${cartas[i].name}`)
            }
        }
    }
    res.status(404).send(`No se encontró la id: ${cartasID}`)
});


function ifExists(datos) {
    let id = [];

    for (let index = 0; index < cartas.length; index++) {
        id.push(cartas[index].id)
    }
    console.log(id);
    if (id.includes(datos.id)) {
        return false;
    }
    else {
        return true;
    }
}

app.post("/api/cartas", (req,res) =>{

    if (Array.isArray(req.body)){
        for (let i = 0; i < req.body.length; i++) {
            if (ifExists(req.body[i])) {
                cartas.push(req.body[i])
            }
        }
    }
    else {
        console.log(req.body);
        if (ifExists(req.body)) {
            cartas.push(req.body)
        }
    }
    res.status(201).send("Cartas creadas");
});

app.delete("/api/cartas/:id", (req, res) =>{
    const cartasID = req.params.id;
    console.log(cartasID)

    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        for (let i = 0; i < cartas.length; i++) {
            if (cartasID == cartas[i].id) {
                const id = cartas[i].id
                cartas.splice(i,1);
                res.status(200).send(`Se borró la carta: ${id}`)
            }
        }
    }
    res.status(404).send(`No se encontró la id: ${cartasID}`)
});

app.put("/api/cartas/:id", (req, res) => {
    const cartasID = req.params.id;

    let llave_mod = Object.keys(req.body);
    console.log(llave_mod);

    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        for (let i = 0; i <= cartas.length; i++) {
            if (cartasID == cartas[i].id) {
                var crt = i;
                console.log(crt);
                break;
            }
            else if (i == cartas.length-1){
                res.status(404).send(`No se encontró la id: ${cartasID}`)
            }
        }
    }
    let llaves = Object.keys(cartas[crt]);
    console.log(llaves);
    for (let i = 1; i < llaves.length; i++){
        if (llave_mod.includes(llaves[i])) {
            let index = llave_mod.indexOf(llaves[i]);
            cartas[crt][llaves[i]] = req.body[llave_mod[index]]
            res.status(200).send(`Se modifico la carta de id: ${cartasID}`);
        }
    }
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})