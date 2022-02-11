import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
// import AddTask from "../add-task.component";
// import { Builder, By, Key, until } from "selenium-webdriver";

let driver
let vars

/* beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  }) */

it("Unit Test, check if component renders on Screen", async () => {
	// const webdriver = require("selenium-webdriver"),
	// 	By = webdriver.By,
	// 	until = webdriver.until;

	// const driver = new webdriver.Builder().forBrowser("chrome").build();

	driver = await new Builder().forBrowser('chrome').build()
	await driver.get("http://localhost:8081/add")
    await driver.manage().window().setRect({ width: 1522, height: 812 })
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("title")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("description")
    // await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css(".btn")).click()
    // await driver.findElement(By.css(".btn")).click()
    // {
    //   const element = await driver.findElement(By.css(".btn"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.linkText("Tasks")).click()
    await driver.close()


	  
	// driver.get("http://www.google.com");

	// driver.findElement(By.name("q")).sendKeys("webdriver");

	// driver.sleep(1000).then(function () {
	// 	driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
	// });

	// driver.findElement(By.name("btnK")).click();

	// driver.sleep(2000).then(function () {
	// 	driver.getTitle().then(function (title) {
	// 		if (title === "webdriver - Google Search") {
	// 			console.log("Test passed");
	// 		} else {
	// 			console.log("Test failed");
	// 		}
	// 		driver.quit();
	// 	});
	// });
	// let driver = await new Builder().forBrowser("firefox").build();
	// try {
	// 	await driver.get("http://www.google.com/ncr");
	// 	await driver
	// 		.findElement(By.name("q"))
	// 		.sendKeys("webdriver", Key.RETURN);
	// 	await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
	// } finally {
	// 	await driver.quit();
	// }
});
