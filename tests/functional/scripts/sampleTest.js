module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://projectfindertest.mybluemix.net')
      .waitForElementVisible('.btn', 60000, true,
      	function(){}, 'Waiting for button to be visible')
      .click('.btn')
      .pause(5000)
      .end();
  }
};
