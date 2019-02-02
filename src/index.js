document.addEventListener("DOMContentLoaded", function(event) {

  const $ = require('cheerio');
  const rp = require('request-promise');
  var urlfield = document.getElementById('input_url');

  scrapper = function(targeturl){
    rp(targeturl)
      .then(function(){
        console.log("Is URL");
      })
      .catch(function(err){
        console.log("Not URL");
      })
  }

  urlSubmit = function(){
    console.log(urlfield.value);
    //if input == valid URL run scraper function.
    scrapper(urlfield.value);
    //else throw error.
  };

  document.getElementById('submit_button').addEventListener('click', urlSubmit);
});
