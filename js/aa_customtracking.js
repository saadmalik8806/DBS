$( document ).ready(function() {

    //track download button
    //https://www.dbs.com/digibank/in/download.page
    $('.downloadapp').on("click", function(event) {
      
        digitalData['cta'] = {
            'name': $(this).find('img').attr('alt')
        };
        setTimeout(function() {
            _satellite.track('in-pweb-generic_button');
        }, 500);
      
        "console" in window && console.log("DTM console log :::: Button Click ::: " + digitalData.cta.name)
    });
  
  
  });