
const express = require('express')
const process = require('process')
const app = express()

process.on('SIGINT',() => {
    console.log('Application is being interrupted].......')
    process.exit(0)

})
process.on('SIGTERM',() => {
    console.log('Application is being terminated.......')
    process.exit(0)

})

app.get('/', function(req, res){
    res.send('this express was executed by node.js container')
})

app.listen(3000)