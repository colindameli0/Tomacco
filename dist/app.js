$(document).ready(function(){

var apikey = "ac4zdcd3j9yatae732uc2dkv";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

//construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var query;

 
// $(document).ready(function() {
	$('.submit').on('click', function(e){
		e.preventDefault();
    query = $('input').val()
		console.log('tomacco');
 
 // send off the query
  $.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(query) + '&page_limit=5',
    dataType: "jsonp",
    success: searchCallback
  });
});


// callback for when we get back the results
function searchCallback(data) {
  $(document.body).append('Found ' + data.total + ' results for ' + query);
  var movies = data.movies;
  $.each(movies, function(index, movie) {
	// arr.push(criticScore);
	
  if (movie.ratings.critics_score >=0) {
     $(document.body).append('<div><h1>' + "Critic's score "+ movie.ratings.critics_score + '</h1></div>');
     $('.movie-title').append('<h1>' + movie.title + '</h1>');
     $('.movie-title').append('<h1>' + movie.year + '</h1>');
     // console.log(movie.abridged_directors[].name)
     // $(document.body).append('<h1>' + movie.abridged_directors[0].name + '</h1>');

     var arrayLength = movie.abridged_cast.length;
     for (var i=0; i < arrayLength; i++) {
      cast = movie.abridged_cast[i].name;
      console.log(cast)
      $(document.body).append('<h1>' + cast + '</h1>');
     } 


    // var cast = movie.abridged_cast[]
    // var director = movie.abridged_directors[0]
    // $(document.body).append('<h1>' + director.name + '</h1>');
     // $(document.body).append('<img src="' + movie.posters.thumbnail + '" />')
  
   };
 });
};

});
