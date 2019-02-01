const $ = require('cheerio');
const rp = require('request-promise');

//user inputs URL

//use Cheerio to search target URL for a header tag with "ingredients"
//add ingredients tag's contents to array
//each submit, add duplicate ingredients together in array.

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('submit_button').addEventListener('click', test);
});
