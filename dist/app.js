$(document).ready(function(){

  var apikey = "ac4zdcd3j9yatae732uc2dkv";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

 

//construct the uri with our apikey

var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

var query = $('form').val();

 

// $(document).ready(function() {
	$('.enter').on('click', function(e){
		e.preventDefault();
		console.log('tomacco')
 

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
   $(document.body).append('<h1>' + movie.title + '</h1>');
   $(document.body).append('<h3>' + "Critic's score "+ movie.ratings.critics_score + '</h3>');
   $(document.body).append('<img src="' + movie.posters.thumbnail + '" />')
  
   
 
 

};



 });

};


});
