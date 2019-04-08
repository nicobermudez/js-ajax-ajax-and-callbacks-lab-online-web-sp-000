function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function renderCommit(commit) {
  
}

function renderSearchResult(result) {
  return `
    <div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits </a></p>
      <p>${result.description}</p>
      </div>
      <hr>
      `
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
