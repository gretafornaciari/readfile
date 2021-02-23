var express = require("express")
const app = express()
const fs = require('fs'); 
const util= require ('util')

const a= fs.readFileSync("./testo.txt","utf-8")
console.log(a)

console.log("ciao")

fs.readFile('./testo2.txt', 'utf8' , (err, data) => {
  console.log(data)
})
 console.log("mare")

 const readFileP = util.promisify(fs.readFile)

 for( let i = 0; i<10; i++){
     const testo = fs.readFile("./testo3.txt","utf-8",(err, data) =>{
        console.log(data)   
     })
 }
