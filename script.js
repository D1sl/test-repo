var resultListEl = document.querySelector("#resultlist");
var searchButton = document.querySelector("#run-search");
var searchInputEl = document.querySelector("#search");

var pageNumber = 1;
var actorSearchTerm = "Bruce"

var apiUrl = 'https://api.themoviedb.org/3/search/person?api_key=c930372b21a65386f628c5e6b7d65d66&language=en-US&query=' + actorSearchTerm + '&page=1';

// function getApi() {
//     // get the actor id
//     fetch(apiUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {

//             var actorId = data.results[0].id;
//             console.log(data.results[0].name + ", Actor ID: " + data.results[0].id);

//             var personMovieApi = 'https://api.themoviedb.org/3/discover/movie?api_key=c930372b21a65386f628c5e6b7d65d66&language=en-US&sort_by=vote_average.asc&include_adult=false&page=' + pageNumber + '&with_people=' + actorId;
//             console.log(personMovieApi);
            
            
//             // get the movies based on that id
//             fetch(personMovieApi)
//                 .then(function (response) {
//                     return response.json();
//                 })                    
//                 .then(function (data) {
//                         console.log(data);
//                 })







//         });
        




// }

// form submit handler
var formSubmitHandler = function (event) {
    event.preventDefault();

    // get value from input
    var searchTerm = searchInputEl.value.trim();

    if (searchTerm) {
        actorId(searchTerm);
    } else {
        alert("Please enter a search term");
    }
}

// get actor ID for the search term
var actorId = function (actor) {
    // format the API url
    var apiUrl = 'https://api.themoviedb.org/3/search/person?api_key=c930372b21a65386f628c5e6b7d65d66&language=en-US&query=' + actor + '&page=1';
    // make request to the url
    fetch(apiUrl)
    .then(function (response) {
        // request successful
        if (response.ok) {
            response.json().then(function (data) {
                var resultActorId = data.results[0].id;
                console.log(resultActorId);
            })
        }
    })
}



searchButton.addEventListener('click', formSubmitHandler);
