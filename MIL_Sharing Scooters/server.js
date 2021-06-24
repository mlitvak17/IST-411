//Written by Mauricio I. Litvak

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

const userList = [];
const resList = [];
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

app.get('/', (req, res) => {
    res.send(`Hello from our GET request!`);

});

app.get('/username/:userName', (req, res) => {
    const userName = req.params.userName;
    
    let users =
        {
            name: userName
        };
    userList.push(users);

    userList.forEach(user => {
        console.log(user);
    });

    fs.writeFile('users.json', JSON.stringify(userList), err => {
        if (err) throw err;
        console.log('Saved.');
    });
    res.send(`${userName} was added to the system.`);
});

app.get('/username/:userName/date/:date/time/:time/hours/:hours', (req, res) => {
    const userName = req.params.userName;
    const date = req.params.date;
    const time = req.params.time;
    const hours = Number(req.params.hours); 

    let reservation = 
        {
            name: userName,
            date: date,
            time: time,
            hours: hours
        };

    resList.push(reservation);
    resList.forEach(res => {
        console.log(res);
    });

    fs.writeFile('reservations.json', JSON.stringify(resList), err => {
        if (err) throw err;
            console.log('Saved');
        });
    res.send(`Reservation was added to the system.`);
});

app.get('/delete/reservation/username/:userName', (req, res) => {
    const userName = req.params.userName;

    fs.readFile('reservations.json', (err,data) => {
        if (err) throw err;

        let resData = JSON.parse(data);
        var x = 0;
        resData.forEach(
            res =>
            {

                if(res.name === userName)
                {
                    delete resData[x];
                    //resData.splice(x, x);
                    console.log("found.");
                    console.log(resData)
                }
                else
                {
                    x += 1;
                }
            }
        );
    });

    res.send('Deleted.');
});

app.get('/reservations', (req, res) => {
    res.send(resList);
});

app.get('/reservations/username/:userName', (req, res) => {
    const userName= req.params.userName;

    if(resList.name = userName) {
        res.send(resList[0]);
    }
});

app.put('/username/:userName/date/:date/time/:time/hours/:hours', (req, res) => {
    const userName = req.params.userName;
    const date = req.params.date;
    const time = req.params.time;
    const hours = Number(req.params.hours); 

    let reservation = 
        {
            name: userName,
            date: date,
            time: time,
            hours: hours
        };

    if (resList.includes(userName)) {
        resList.splice(0,1);

        resList.push(reservation);
        resList.forEach(res => {
            console.log(res);
        });

        fs.writeFile('reservations.JSON', JSON.stringify(resList), err => {
            if (err) throw err;
            console.log('Saved');
        });

    }
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 
