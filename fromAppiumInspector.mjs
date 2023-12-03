// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";
async function main() {
  const caps = {
    "appium:automationName": "UIAutomator2",
    platformName: "android",
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true,
    //Currently Active App ID	 spain.codere.apuestas
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });

  // await driver.deleteSession();

  const loginButton = await driver.$(
    '//android.widget.Button[@text="Acceder"]'
  );
  await loginButton.click();

  await driver
    .$('//android.widget.EditText[@hint="Usuario / Correo electrónico"]')
    .addValue("test");
  //
}

main().catch(console.log);
