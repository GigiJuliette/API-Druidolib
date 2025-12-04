import express from "express"
import cors from "cors"
import {praticiens} from './praticiens.js'; 
// const express = require('express')

const app = express()

app.use(cors('*'))

app.get('/', (req, res) => {
    console.log('tu es sur la route / ')
    res.send('tu est sur la route / ')
})

// Get http://localhost:4242/praticiens
app.get('/praticiens', (req, res) => {
    console.log('tu est sur la route /praticiens ')
    res.json(praticiens)
})

app.listen(4242, () => {
    console.log('http://localhost:4242/')
})