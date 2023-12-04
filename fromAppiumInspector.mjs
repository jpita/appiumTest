// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";
async function main() {
  const caps = {
    "appium:automationName": "UIAutomator2",
    platformName: "android",
    // "appium:ensureWebviewsHavePages": true,
    // "appium:nativeWebScreenshot": true,
    // "appium:newCommandTimeout": 3600,
    // "appium:connectHardwareKeyboard": true,
    "appium:app": "Codere_ Apuestas Deportivas_4.4.apk",
    // "appium:appPackage": "spain.codere.apuestas",
    // Currently Active App ID	 spain.codere.apuestas
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });

  const loginButton = await driver.$(
    '//android.widget.Button[@text="Acceder"]'
  );
  await loginButton.click();

  await driver
    .$('//android.widget.EditText[@hint="Usuario / Correo electrónico"]')
    .addValue("test-bloqueado1234");
  await driver
    .$('//android.widget.EditText[@hint="Contraseña"]')
    .addValue("ejercicioTecnico");
  await driver.$('//android.widget.Button[@resource-id="btnaccess"]').click();
  (
    await driver.$('//android.widget.TextView[@resource-id="alert-hdr-1"]')
  ).click();
  await driver.deleteSession();
  await driver.close;
  await driver.terminateApp("spain.codere.apuestas");
}

main().catch(console.log);
