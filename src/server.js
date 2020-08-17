
const proffys =[
  { name:"Diego Fernandes",
   avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
   whatsapp:"41995309999", 
   bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
   subject:"Química", 
   cost:"20", 
   weekday:[0], 
   time_from:[720], 
   time_to:[1220]
   },
   { name:"Alan Felipe",
   avatar:"https://avatars0.githubusercontent.com/u/55320061?s=460&u=42731ea4c09012a91e9fffa3f12b4f8f5cebc587&v=4",
   whatsapp:"41995309999", 
   bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
   subject:"Química", 
   cost:"20", 
   weekday:[0], 
   time_from:[720], 
   time_to:[1220]
   }
]
 
function pageLanding(req, res){
  return res.sendFile("index.html")
}
function pageStudy(req, res){
  return res.sendFile("study.html")
}
function pageGiveClasses(req, res){
  return res.sendFile("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//Configurar nunjucks
nunjucks.configure('src/views',{
  express: server,
  noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)