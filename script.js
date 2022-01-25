var resultListEl = document.querySelector("#resultlist");
var searchButton = document.querySelector("#run-search");
var searchInputEl = document.querySelector("#search");


// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     // get value from input element
//     var searchInput = searchInputEl.value.trim();

//     if (searchInput) {
//         getApi(searchInput)
//         searchInputEl.value = "";
//     } else {
//         alert("Please enter a search term");
//     }

//     console.log(event);
// }

function getApi() {
    var apiUrl = 'https://api.themoviedb.org/3/search/person?api_key=c930372b21a65386f628c5e6b7d65d66&language=en-US&query=bruce&page=1';

    // get the actor id

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
            console.log(response);
        })
        .then(function (data) {

            var personId = data.results[0].id;
            console.log(data.results[0].name);
            console.log(data.results[0].id);

            var actorNameEl = document.createElement('li');
            actorNameEl.textContent = data.results[0].name;
            resultListEl.appendChild(actorNameEl);

            var pageNumber = 1;

            var personMovieApi = 'https://api.themoviedb.org/3/discover/movie?api_key=c930372b21a65386f628c5e6b7d65d66&language=en-US&sort_by=vote_average.asc&include_adult=false&page=' + pageNumber + '&with_people=' + data.results[0].id;
            console.log(personMovieApi);




            // get the movies based on that id
            fetch(personMovieApi)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    for (var i = 0 ; data.results.length > 0; i++) {
                        


                        
                        if (data.results[i].vote_count > 0) {
                            
                            var resultCount = 0;
                            resultCount++;
                            
                            console.log(resultCount);
                            console.log(data.results[i].title);
                            
                        }
                        
                        

                    }

                    fetch(movieRatings)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {

                            console.log(data.results[0].content);
                            console.log(data.results);

                            var review = document.createElement('li');
                            review.textContent = data.results[0].content;
                            resultListEl.appendChild(review);

                        })

                })



            console.log

            var resultItem = document.createElement('li');



            // resultListEl.appendChild(resultItem);
            // console.log(test);
        });
}

// searchButton.addEventListener('click', formSubmitHandler);

getApi();