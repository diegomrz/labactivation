module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://projectfindertest.mybluemix.net')
      .waitForElementVisible('.btn', 60000, true,
      	function(){}, 'Waiting for Search Input to become visible')
      .click('.btn')
      .waitForElementPresent('.quantumWizButtonPaperbuttonLabel', 60000)
      .pause(5000)
      .end();
  }
};
