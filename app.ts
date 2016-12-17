import * as http from 'http';
import * as url from 'url';
import * as util from 'util';

let server: http.Server = http.createServer();

interface resInterface<T, U> {
    name: T;
    age: U;
    weight?: T;
}


server.on('request',async (req:http.ServerRequest, res:http.ServerResponse)=>{
    var resObj: resInterface<string, number> = {
        name: "Richard",
        age: 23,
        weight: "67kg",
    };
    res.writeHead(200, {
        "Content-Type": 'application/json'
    });

    req.on('data',(chunk)=>{
        console.info(chunk.toString());
    });
    // console.info(util.inspect(url.parse(req.url)))
    
    res.end();
    
}).listen(3000)
console.info('nodejs with typescript launch,listen port 3000.');