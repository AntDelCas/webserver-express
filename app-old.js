const http = require('http');

http.createServer((rq, res) => {


    res.writeHead(200, { 'Content-Type': 'application/json' });


    //res.write('Hola mundo');
    let salida = {
        nombre: 'Antonio',
        edad: 45,
        url: rq.url
    }
    res.write(JSON.stringify(salida));
    res.end();

})

.listen(8080);

console.log('escuchando el puerto 8080');