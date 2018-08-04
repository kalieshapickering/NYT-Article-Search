var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "4983d35a5eb44663a93612a5e1be9d39",
  'q': "toronto"
});
//search button
$('#search').on("click", function(event){
    event.preventDefault();
    clear();
    var search = $("name").val();

})

$.ajax({
    url: url,
    method: "GET"
}).then(function(response){ 
console.log(response);


}).catch(function(error){
    console.log(error);
});