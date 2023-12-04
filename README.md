# README

## how to run the tests

- run appium-doctor to make sure u have all the needed dependencies
- run appium server with `appium`
- run `npm install` to install the dependencies
- run the test using `npm test`

## Good things

- using hint instead of complicated and long xpath selector is a good practice
  `$('//android.widget.EditText[@hint="Usuario / Correo electrónico"]')`
- finding the selectors was easy using the appium inspector

## Problems

- we're not using a proper test framework so we don't have a proper test report or test runner
- we're not using a proper page object model so we're not separating the selectors from the tests
- we should find a way to accept the cookies automatically so we can run the tests as many times we want
