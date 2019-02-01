const $ = require('cheerio');
const rp = require('request-promise');

urlSubmit = function(){
  console.log(document.getElementById('input_url').value);
  console.log("click");

};

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('submit_button').addEventListener('click', urlSubmit);
});
