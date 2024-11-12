import express, {Express, Request, Response} from "express"

const PORT = 3000

const app:Express = express()

const desarrolladores = [
    {
        nombre: "Grego",
        edad: 28,
        tecnologias: ["Python", "Flask"]
    }

]

app.get("/desarrolladores", (request: Request, response: Response) => {
    console.log("Hola")
    response.send(desarrolladores)
})

app.post("./", (request: Request, response: Response) => {

})

app.put("./", (request: Request, response: Response) => {
    
})

app.delete("./", (request: Request, response: Response) => {
    
})

app.listen(PORT)

console.log(`application running on port ${PORT}`)

export const initializeApp = () => {}