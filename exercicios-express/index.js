const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')

// app.use(saudacao)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use('/opa', (req, res, next) => {
    console.log('Será que serei chamado')
    next();
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body.name)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.get('/opa', (req, res) => {
    // res.send('Estou bem')
    res.json({
        name: 'Ipad',
        preco: 1899.90,
        desconto: 0.12
    })
})




app.listen(3000, () => {
    console.log('Backend escutano a porta 3000')
})