$("#search").on("click", function(event) {
event.preventDefault();

var searchValue = $("#search-input").val();

var searchTerm = "&q";
var search = searchTerm + searchValue;

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fd0b4c8cacec4896b6100d99f0360954";

$.ajax({
  url: queryUrl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
