import express from "express"
import cors from "cors"
import { praticiens } from './praticiens.js'; 
// const express = require('express')

const app = express()

app.use(cors('*'))

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    console.log('tu es sur la route / ')
    res.send('tu est sur la route / ')
})

// Get http://localhost:4242/praticiens

app.get('/praticiens/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log("ID demandé :", id);
  const praticien = praticiens.find(p => p.id === id);

  if (!praticien) {
    return res.status(404).json({ message: "Praticien non trouvé" });
  }

  res.json(praticien);
})

app.get('/praticiens', (req, res) => {
    console.log('tu est sur la route /praticiens ')
    res.json(praticiens)
})

app.listen(4242, () => {
    console.log('http://localhost:4242/')
})