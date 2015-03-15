module.exports = {
  "Demo test npm.js" : function( browser ) {
    browser
      .url('http://npmjs.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=q]', 'nightwatch')
      .click('input[type=submit]')
      .assert.containsText('a[href*="/search"]', 'nightwatch')
      .end();
  }
};
