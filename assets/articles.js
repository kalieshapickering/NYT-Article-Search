var Url = "https://api.nytimes.com/svc/books/v3/lists//.json?";
queryUrl = url += '?' + $.param({
    'api-key': "4983d35a5eb44663a93612a5e1be9d39"
  });

$.ajax({
    url: queryUrl,
    method: 'GET'
}).then(function(response){

}).catch(function(error){
    console.log(error);
})