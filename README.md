# Visual Regression Test

A project that uses PhantomCSS to perform visual regression tests.

-----------------------

To use it:

Clone the repository:
```
git clone https://github.com/Matt-B/visual-regression-test.git
```
Install dependencies:
```
npm install
```
Specify your tests in testConfig.json in the following format:
```
{
    "name": "smartphone-portrait", #The name of the test
    "path": "www.7digital.com", #The URL to be tested
    "selector": "body", #The CSS selector for the element on the page which will be tested
    "viewport": {
        "width": 320, #Viewport width
        "height": 480 #Viewport height
    }
},
```
Then run the tests:
```
grunt
```