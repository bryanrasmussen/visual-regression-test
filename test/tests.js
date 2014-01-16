var tests = require('../testConfig.json').tests;

casper.start();

casper.each(tests, function(casper, test) {
  this.then(function() {
    this.viewport(test.viewport.width, test.viewport.height);
  });
  this.thenOpen(test.url, function() {
    this.wait(5000);
  });
  this.then(function(){
    phantomcss.screenshot(test.selector, test.name);
  });
});