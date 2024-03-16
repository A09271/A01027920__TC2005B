
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


function Evaluation(datos) {
    let id = [];
    let llaves = ["id", "nombre", "ataque", "vida", "elixir"]
    let idflag;
    let flag;

    for (let index = 0; index < cartas.length; index++) {
        id.push(cartas[index].id)
    }
    if (id.includes(datos.id)) {
        idflag = false;
    }
    else {
        idflag = true;
    }

    for (let i = 0; i < llaves.length; i++) {
        if (Object.keys(datos).includes(llaves[i])) {
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
    return flag && idflag;
}

app.post("/api/cartas", (req,res) =>{

    if (Array.isArray(req.body)){
        let estado = 0;
        for (let i = 0; i < req.body.length; i++) {
            console.log(req.body[i]);
            if (Evaluation(req.body[i])) {
                cartas.push(req.body[i])
                estado++;
            }
        }
        if (estado != 0) {
            res.status(201).send("Cartas creadas");
        } else{
            res.status(400).send("id repetida o falta de atributos");
        }
    }
    else {
        console.log(req.body);
        if (Evaluation(req.body)) {
            cartas.push(req.body)
            res.status(201).send("Cartas creadas");
        }
        else {
            res.status(400).send("id repetida o falta de atributos");
        }
    }
});

app.delete("/api/cartas/:id", (req, res) =>{
    const cartasID = req.params.id;
    console.log(cartasID)

    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        for (let i = 0; i <= cartas.length; i++) {
            if (cartasID == cartas[i].id) {
                const id = cartas[i].id
                cartas.splice(i,1);
                res.status(200).send(`Se borró la carta: ${id}`)
                break;
            }
            else if (i == cartas.length-1){
                res.status(404).send(`No se encontró la id: ${cartasID}`)
                break;
            }
        }
    }
});

app.put("/api/cartas/:id", (req, res) => {
    const cartasID = req.params.id;

    let llave_mod = Object.keys(req.body);

    let crt;
    if (cartas.length == 0) {
        res.status(200).send("Lista de cartas vacía");
    }
    else {
        for (let i = 0; i <= cartas.length; i++) {
            if (cartasID == cartas[i].id) {
                crt = i;
                break;
            }
            else if (i == cartas.length-1){
                res.status(404).send(`No se encontró la id: ${cartasID}`)
                break;
            }
        }
    }
    let llaves = Object.keys(cartas[crt]);

    for (let i = 1; i < llaves.length; i++){
        if (llave_mod.includes(llaves[i])) {
            let index = llave_mod.indexOf(llaves[i]);
            cartas[crt][llaves[i]] = req.body[llave_mod[index]]
            res.status(200).send(`Se modifico la carta de id: ${cartasID}`);
            break;
        }
    }
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})