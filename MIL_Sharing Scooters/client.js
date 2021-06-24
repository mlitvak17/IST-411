//Written by Mauricio I. Litvak

function deleteReservation() {

    let url ="http://127.0.0.1:3000/delete/reservation/username/:userName"
    const request = new XMLHttpRequest();

    request.open("GET", url, true);
    request.responseType = 'text';
    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {
            let userName = document.querySelector("#username").value;

            let outputField = document.querySelector("#outputField");
            
            outputField.innerHTML = `${userName}`;

            console.log(userName);
            console.log(msg);
            document.querySelector('#username').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
    

}

function showReservationInfo()
{
    let url ="http://127.0.0.1:3000/reservations/username/:userName"
    const request = new XMLHttpRequest();

    request.open("GET", url, true);
    request.responseType = 'text';
    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {
            let userName = document.querySelector("#username").value;

            let outputField = document.querySelector("#outputField");
            
            outputField.innerHTML = `${userName}`;

            console.log(userName);
            console.log(msg);
            document.querySelector('#username').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
    
}

function addUser() {
    let url ="http://127.0.0.1:3000/username/:userName"

    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {

            console.log(msg);
            document.querySelector('sub').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
}

function createReservation() {
    let url ="http://127.0.0.1:3000/username/:userName/date/:date/time/:time/hours/:hours"

    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {

            console.log(msg);
            document.querySelector('sub').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
}

function showReservations() {

    let url ="http://127.0.0.1:3000/reservations"

    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {

            console.log(msg);
            document.querySelector('#para1').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
}