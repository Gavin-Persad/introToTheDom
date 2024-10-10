const fs = require("node:fs");
const path = require("node:path");

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

// Read the JS file
const js = fs.readFileSync(path.resolve(__dirname, "./index.js"), "utf8");

// Getting Started Tests

describe("index.html", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
	});

	test("should have a script tag linking to index.js", () => {
		const script = document.querySelector('script[src="index.js"]');
		expect(script).not.toBeNull();
	});
});

describe("index.js", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		// Simulate DOMContentLoaded event to run the script
		const script = document.createElement("script");
		script.textContent = js;
		document.body.appendChild(script);
		// document.dispatchEvent(new Event("DOMContentLoaded"));
	});

	test('should contain console.log("Linked!")', () => {
		expect(js).toContain('console.log("Linked!")');
	});

	// Tests for ticket 1a
	// Test bootcamper has use getElementById("title")
	// Test bootcamper has logged the element to the console.
	// Spy on the console to check the correct element is logged.
	// Tests for ticket 1a
	test("should use getElementById('title')", () => {
		const getElementByIdSpy = jest.spyOn(document, "getElementById");
		require("./index.js");
		expect(getElementByIdSpy).toHaveBeenCalledWith("title");
		getElementByIdSpy.mockRestore();
	});

	test("should log the element to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		require("./index.js");
		const titleElement = document.getElementById("title");
		expect(consoleLogSpy).toHaveBeenCalledWith(titleElement);
		consoleLogSpy.mockRestore();
	});

	// // Tests for ticket 3
	// test("Ticke 3a: The heading 'Intro to the DOM' should appear in red and its font size should be 30px", () => {
	// 	const title = document.getElementById("title");
	// 	expect(title.style.color).toBe("red");
	// 	expect(title.style.fontSize).toBe("30px");
	// });

	// test("Ticket 3b: A new paragraph with the text 'This is a dynamically added paragraph.' should appear at the bottom of the page.", () => {
	// 	const paragraph = document.querySelector("body > p:last-child");
	// 	expect(paragraph).not.toBeNull();
	// 	expect(paragraph.textContent).toBe(
	// 		"This is a dynamically added paragraph.",
	// 	);
	// });
	// test("Ticket 3c: The text of the first paragraph with class 'content' should now read 'This paragraph has been updated.'", () => {
	// 	const firstContentParagraph = document.querySelector("p.content");
	// 	expect(firstContentParagraph.textContent).toBe(
	// 		"This paragraph has been updated.",
	// 	);
	// });
	// test("Ticket 3d: The second paragraph with class 'content' should have a title attribute with the value 'Hover over me!'", () => {
	// 	const secondContentParagraph = document.querySelectorAll("p.content")[1];
	// 	expect(secondContentParagraph.getAttribute("title")).toBe("Hover over me!");
	// });
	// test("Ticket 3e: The <ul> element with the id 'itemList' should have an additional class 'styled-list'. The <li> with the content '🍌 Banana' should no longer have the class 'list-item'.", () => {
	// 	const itemList = document.getElementById("itemList");
	// 	expect(itemList.classList.contains("styled-list")).toBe(true);

	// 	const bananaItem = Array.from(itemList.children).find(
	// 		(li) => li.textContent === "🍌 Banana",
	// 	);
	// 	expect(bananaItem.classList.contains("list-item")).toBe(false);
	// });
	// test("Ticket 3f: The <li> element with the content '🍇 Date' should be removed from the DOM.", () => {
	// 	const dateItem = Array.from(document.querySelectorAll("li")).find(
	// 		(li) => li.textContent === "🍇 Date",
	// 	);
	// 	expect(dateItem).toBeUndefined();
	// });
});
