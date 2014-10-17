var tests = require('./test-config');
var phantomcss = require('phantomcss');

phantomcss.init({
	screenshotRoot: './screenshots',
	failedComparisonsRoot: './failures',
	mismatchTolerance: 0.1,
	libraryRoot: './node_modules/phantomcss'
});

casper.start().each(tests, function testScenario(casper, test) {
	this.then(function setViewport() {
		this.viewport.apply(this, test.viewport);
	});
	this.thenOpen(test.url, function checkStatusAndWait(res) {
		if (res.status !== 200) {
			this.die('Expected 200 status code, got ' + res.status);
		}
		this.wait(5000);
	});
	this.then(function captureScreenshot(){
		phantomcss.screenshot(test.selector, test.name);
	});
});

casper.then(function diffScreenshots() {
	phantomcss.compareAll();
});

casper.then(function () {
	// This has to be a separate 'then' because compareAll calls 'then' and it
	// needs to happen before this
	this.test.done();
});

casper.run();
