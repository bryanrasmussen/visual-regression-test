# Visual Regression Test

A project that uses CasperJS with PhantomCSS to perform visual regression tests.

-----------------------

To use it:

Clone the repository:

	git clone https://github.com/7digital/visual-regression-test.git

Install dependencies:

	npm install

Specify your tests in test-config.json in the following format:

{
        "host": "https://www.google.com",
        "selector": "body",
        "viewports": {
                "smartphone-portrait": [320, 480],
                "smartphone-landscape": [480, 320]
        },
        "pages": {
                "home": {
                        "path": "/"
                }
        }
}

Then run the tests:

	node casperjs-wrapper
