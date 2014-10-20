# Visual Regression Test

A project that uses CasperJS with PhantomCSS to perform visual regression tests.

-----------------------

To use it:

Clone the repository:

	git clone https://github.com/Matt-B/visual-regression-test.git

Install dependencies:

	npm install

Specify your tests in test-config.json in the following format:

	{
		"name": "smartphone-portrait", #The name of the test
		"path": "http://www.7digital.com", #The URL to be tested
		"selector": "body", #The CSS selector for the element on the page which will be tested
		"viewport": [1024, 768] #Viewport [width, height]
	},

Then run the tests:

	grunt
