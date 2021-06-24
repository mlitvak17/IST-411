//Code by Mauricio I. Litvak
//utilizing studio Ghibli API
//gets movie title and description

function showSelection()
{
    let movieSelection = document.querySelector("#movies").value;

    let outputField = document.querySelector("#outputField");

    outputField.innerHTML = `${movieSelection}!`;

    console.log(movieSelection);
}

function accessData()
{
    var movies = [];
    const request = new XMLHttpRequest();

    request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    request.onload = function() {
        
        data = JSON.parse(this.response);
        
        var selection = document.getElementById("movies");

        if(request.status == 200)
        {
            data.forEach(
                
                movie=>
                {   
                    
                    var option;
                    
                    option = document.createElement("option");
                    option.value = (movie.description);
                    option.text = (movie.title);
                    selection.appendChild(option); 
                    
                    console.log(`Movie: ${movie.title}`);
                
            }
            );
        }

        else
        {
            console.log(`Error occurred: Status: ${request.status}`);
        }
    };
    request.send();
}
accessData()