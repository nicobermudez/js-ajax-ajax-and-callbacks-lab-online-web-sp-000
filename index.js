
function renderSearchResult(result) {
  
}

function renderSearchResults(data) {
  data.items.map( result => renderSearchResult(result))
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(renderSearchResults(data))
  }).fail(function(error) {
    displayError()
  })
}

$(document).ready(function (){
});
