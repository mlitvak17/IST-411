//Written by Mauricio I. Litvak
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const path = './datelog.txt'

try {
  if (fs.existsSync(path)) {
    console.log('datelog.txt already exists');
  }
  else
  {
    fs.writeFile('datelog.txt', '', (error) => {

        if (error) throw error;
        console.log('datelog.txt created');
    
    });
  }
} catch(err) {
  console.error(err)
}


const server = http.createServer((req, res) => {

    const {method, url} = req;

    console.log(`${method} : ${url}`);


    if (method === 'GET' && url === '/dates')
    {
        const fileContents = fs.readFileSync('datelog.txt');
        res.statuscode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
       
        res.write(`${fileContents}`);
        console.log(` ${fileContents}`);
    }
    else if (method === 'POST' && url === '/logdate')
    {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        let date = Date()
        res.write(date);
        const appendFile = fs.appendFile('datelog.txt', `${Date()} \n`, (err) => {

            if (err) throw error;
            
        
        });
        res.statuscode = 200;
        
       
        
    }
    else
    {
        res.statuscode = 404;
        res.setHeader('Access-Control-Allow-Origin', '*');

        res.write(`Resource not available`);
        console.log(`Error occured. Status: ${req.status}`)
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});