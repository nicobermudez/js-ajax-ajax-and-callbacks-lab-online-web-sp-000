function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {

  }).fail(function(error) {
    displayError()
  })
}

$(document).ready(function (){
});
