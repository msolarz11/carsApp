import { createServer } from "http";
import cars from "./cars_full.json" assert { type: "json" };
console.log(cars);

const PORT = 3000;
const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    switch(req.method){
        case "GET":
            
            res.writeHead("200", {
                "Content-Type": "text/plain;charset=utf-8",
              });
              res.end(
                JSON.stringify({
                    cars: cars
                })
              );
            break
    }

})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});