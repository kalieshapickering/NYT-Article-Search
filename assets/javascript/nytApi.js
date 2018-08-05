
function buildQueryUrl(){

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  var queryParams ={'api-key': "4983d35a5eb44663a93612a5e1be9d39"}
      
     queryParams.q = $("#search").val().trim();
     console.log(queryURL);
}

function updatePage(NYTData){
    var numArticles =$("#article-count").val();
    console.log(NYTData);
    for (var i=0; i< numArticles.length; i++){
        var article = NYTData.response.doc[i];
        var articleCount = i +1;
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");
        $("#articleDisplay").append($articleList);
        var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline && headline.main) {
      console.log(headline.main);
      $articleListItem.append(
        "<span class='label label-primary'>" + articleCount + "</span>" + "<strong> " + headline.main + "</strong>"
      );
    }

    // If the article has a byline, log and append to $articleList
    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);
      $articleListItem.append("<h5>" + byline.original + "</h5>");
    }

    // Log section, and append to document if exists
    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleListItem.append("<h5>Section: " + section + "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
    console.log(article.web_url);

    // Append the article
    $articleList.append($articleListItem);
    }
}


//clear function
function clear(){
    $("#articleDisplay").empty();
}

//search button
$('#search').on("click", function(event){
    event.preventDefault();
    clear();

    var queryURL = buildQueryUrl();

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(updatePage){ 
    console.log(updatePage);
    
    
    }).catch(function(error){
        console.log(error);
        alert("there is an error!");
    });
});
//clear button
$("clearBtn").on("click", clear);