//Written by Mauricio I. Litvak
function accessData() {
    let url ="http://127.0.0.1:3000/dates"

    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onload = function() {
        let msg = this.response;

        if(request.status == 200) {

            console.log(msg);
            document.querySelector('#para2').innerHTML = msg;
        }
        else
        {
            console.log(`Error occured. Status: ${request.status}`);
        }
    };
    request.send();
}

function logDate() {

    let url ="http://127.0.0.1:3000/logdate"

    const request = new XMLHttpRequest();

    request.open("POST", url, true);

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

function sendInvalidRequest() {
    let url ="http://127.0.0.1:3000/invalid"
    const request = new XMLHttpRequest;
    request.open("GET", url, true);
    request.status == 404;
    request.onload = function() {
        let msg = this.response;

        
        console.log(msg);
        document.querySelector('#para3').innerHTML = msg;
        console.log(`Error occured. Status: 404`);
        return request.status=404;
        
    };

    request.send()

}