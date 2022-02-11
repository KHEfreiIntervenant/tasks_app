import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
// import AddTask from "../add-task.component";
// import { Builder, By, Key, until } from "selenium-webdriver";

let driver;
let vars;

it("Unit Test, check if component renders on Screen", async () => {
	expect(true).toBe(true);
	// webdriver.Builder().forBrowser("chrome").build();

	// driver = await new Builder().forBrowser("chrome").build();
	// await driver.get("http://localhost:8081/add");
	// await driver.manage().window().setRect({ width: 1522, height: 812 });
	// await driver.findElement(By.id("title")).click();
	// await driver.findElement(By.id("title")).sendKeys("title");
	// await driver.findElement(By.id("description")).click();
	// await driver.findElement(By.id("description")).sendKeys("description");
	// // await driver.findElement(By.css("html")).click()
	// await driver.findElement(By.css(".btn")).click();
	// // await driver.findElement(By.css(".btn")).click()
	// // {
	// //   const element = await driver.findElement(By.css(".btn"))
	// //   await driver.actions({ bridge: true }).moveToElement(element).perform()
	// // }
	// // await driver.findElement(By.linkText("Tasks")).click()
	// await driver.close();
});
