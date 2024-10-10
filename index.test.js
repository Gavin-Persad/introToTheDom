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
	test("1a) should use getElementById('title')", () => {
		const getElementByIdSpy = jest.spyOn(document, "getElementById");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		expect(getElementByIdSpy).toHaveBeenCalledWith("title");
		getElementByIdSpy.mockRestore();
	});

	test("1a) should log the correct element to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const titleElement = document.getElementById("title");
		expect(consoleLogSpy).toHaveBeenCalledWith(titleElement);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 1b
	test("1b) should use getElementsByClassName('content')", () => {
		const getElementsByClassNameSpy = jest.spyOn(
			document,
			"getElementsByClassName",
		);
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		expect(getElementsByClassNameSpy).toHaveBeenCalledWith("content");
		getElementsByClassNameSpy.mockRestore();
	});

	test("1b) should log the correct elements with class 'content' to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const contentElements = document.getElementsByClassName("content");
		expect(contentElements.length).toBe(2);
		expect(contentElements[0].textContent).toMatch(
			/This is a paragraph with the class "content"\.|This paragraph has been updated\./,
		);
		expect(contentElements[1].textContent).toBe(
			'This is another paragraph with the class "content" and "highlight".',
		);
		expect(consoleLogSpy).toHaveBeenCalledWith(contentElements);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 1c
	test("1c) should use getElementsByTagName('li')", () => {
		const getElementsByTagNameSpy = jest.spyOn(
			document,
			"getElementsByTagName",
		);
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		expect(getElementsByTagNameSpy).toHaveBeenCalledWith("li");
		getElementsByTagNameSpy.mockRestore();
	});

	test("1c) should log the correct elements with tag 'li' to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const liElements = document.getElementsByTagName("li");
		expect(liElements.length === 5 || liElements.length === 4).toBe(true);
		if (liElements.length === 5) {
			expect(liElements[0].textContent).toBe("🍎 Apple");
			expect(liElements[1].textContent).toBe("🍌 Banana");
			expect(liElements[2].textContent).toBe("🍒 Cherry");
			expect(liElements[3].textContent).toBe("🍇 Date");
			expect(liElements[4].textContent).toBe("🍈 Fig");
		} else if (liElements.length === 4) {
			expect(liElements[0].textContent).toBe("🍎 Apple");
			expect(liElements[1].textContent).toBe("🍌 Banana");
			expect(liElements[2].textContent).toBe("🍒 Cherry");
			expect(liElements[3].textContent).toBe("🍈 Fig");
		}
		expect(consoleLogSpy).toHaveBeenCalledWith(liElements);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 1d
	test("1d) should use querySelector('.highlight')", () => {
		const querySelectorSpy = jest.spyOn(document, "querySelector");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		expect(querySelectorSpy).toHaveBeenCalledWith(".highlight");
		querySelectorSpy.mockRestore();
	});

	test('1d) should log the correct element with class "highlight" to the console', () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const highlightElement = document.querySelector(".highlight");
		expect(highlightElement.textContent).toBe(
			'This is another paragraph with the class "content" and "highlight".',
		);
		expect(consoleLogSpy).toHaveBeenCalledWith(highlightElement);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 1e
	test("1e) should use querySelectorAll('.highlight')", () => {
		const querySelectorAllSpy = jest.spyOn(document, "querySelectorAll");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		expect(querySelectorAllSpy).toHaveBeenCalledWith(".highlight");
		querySelectorAllSpy.mockRestore();
	});

	test('1e) should log the correct elements with class "highlight" to the console', () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const highlightElements = document.querySelectorAll(".highlight");
		expect(highlightElements.length).toBe(3);
		expect(highlightElements[0].textContent).toBe(
			'This is another paragraph with the class "content" and "highlight".',
		);
		expect(highlightElements[1].textContent).toBe("🍒 Cherry");
		expect(highlightElements[2].textContent).toBe("🍈 Fig");
		expect(consoleLogSpy).toHaveBeenCalledWith(highlightElements);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 2

	// Tests for ticket 2a
	test("2a) should select the first <li> inside <ul> with id 'itemList'", () => {
		const firstLiElement = document.querySelector("#itemList li");
		expect(firstLiElement).not.toBeNull();
	});

	test("2a) should log the parent <ul> element to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const firstLiElement = document.querySelector("#itemList li");
		const parentUlElement = firstLiElement.parentNode;
		expect(parentUlElement.id).toBe("itemList");
		expect(consoleLogSpy).toHaveBeenCalledWith(parentUlElement);
		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 2b
	test("2b) should select the <ul> element with id 'itemList'", () => {
		const ulElement = document.getElementById("itemList");
		expect(ulElement).not.toBeNull();
	});

	test("2b) should log the child nodes of the <ul> element to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");
		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));
		const ulElement = document.getElementById("itemList");
		const childNodes = ulElement.childNodes;
		expect(childNodes).not.toBeNull();
		expect(childNodes.length).toBeGreaterThan(0);
		expect(consoleLogSpy).toHaveBeenCalledWith(childNodes);
		consoleLogSpy.mockRestore();
	});

	// Test for Ticket 2c
	test("2c) should use getElementById('itemList') and access its children", () => {
		const getElementByIdSpy = jest.spyOn(document, "getElementById");

		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));

		const ulElement = document.getElementById("itemList");
		const children = ulElement.children;

		expect(getElementByIdSpy).toHaveBeenCalledWith("itemList");
		expect(children.length === 5 || children.length === 4).toBe(true);
		getElementByIdSpy.mockRestore();
	});

	test("2c) should log the element children of the <ul> with id 'itemList' to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");

		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));

		const ulElement = document.getElementById("itemList");
		const children = ulElement.children;

		expect(children.length === 5 || children.length === 4).toBe(true);
		if (children.length === 5) {
			expect(children[0].tagName).toBe("LI");
			expect(children[1].tagName).toBe("LI");
			expect(children[2].tagName).toBe("LI");
			expect(children[3].tagName).toBe("LI");
			expect(children[4].tagName).toBe("LI");
		} else if (children.length === 4) {
			expect(children[0].tagName).toBe("LI");
			expect(children[1].tagName).toBe("LI");
			expect(children[2].tagName).toBe("LI");
			expect(children[3].tagName).toBe("LI");
		}

		expect(consoleLogSpy).toHaveBeenCalledWith(children);
		consoleLogSpy.mockRestore();
	});

	// Test for Ticket 2d
	test("2d) should use getElementById('itemList') and access its firstElementChild and lastElementChild", () => {
		const getElementByIdSpy = jest.spyOn(document, "getElementById");

		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));

		const ulElement = document.getElementById("itemList");
		const firstChild = ulElement.firstElementChild; // Use firstElementChild instead of firstChild
		const lastChild = ulElement.lastElementChild; // Use lastElementChild instead of lastChild

		expect(getElementByIdSpy).toHaveBeenCalledWith("itemList"); // Ensure it used getElementById('itemList')
		expect(firstChild).not.toBeNull(); // Verify firstElementChild exists
		expect(lastChild).not.toBeNull(); // Verify lastElementChild exists
		getElementByIdSpy.mockRestore();
	});

	// Test for Ticket 2d
	test("2d) should log the firstElementChild and lastElementChild of the <ul> with id 'itemList' to the console", () => {
		const consoleLogSpy = jest.spyOn(console, "log");

		// Simulate DOMContentLoaded event to run the script
		document.dispatchEvent(new Event("DOMContentLoaded"));

		const ulElement = document.getElementById("itemList");
		const firstChild = ulElement.firstElementChild; // Use firstElementChild instead of firstChild
		const lastChild = ulElement.lastElementChild; // Use lastElementChild instead of lastChild

		expect(firstChild).not.toBeNull(); // Ensure firstElementChild exists
		expect(lastChild).not.toBeNull(); // Ensure lastElementChild exists

		// Check that lastElementChild is the <li> element containing "🍈 Fig"
		expect(lastChild.textContent.trim()).toBe("🍈 Fig");

		expect(consoleLogSpy).toHaveBeenCalledWith(firstChild); // Ensure firstElementChild is logged
		expect(consoleLogSpy).toHaveBeenCalledWith(lastChild); // Ensure lastElementChild is logged

		consoleLogSpy.mockRestore();
	});

	// Tests for ticket 3
	test("3a) The heading 'Intro to the DOM' should appear in red and its font size should be 30px", () => {
		const title = document.getElementById("title");
		expect(title.style.color).toBe("red");
		expect(title.style.fontSize).toBe("30px");
	});

	test("3b) A new paragraph with the text 'This is a dynamically added paragraph.' should appear at the bottom of the page.", () => {
		const paragraph = document.querySelector("body > p:last-child");
		expect(paragraph).not.toBeNull();
		expect(paragraph.textContent).toBe(
			"This is a dynamically added paragraph.",
		);
	});
	test("3c) The text of the first paragraph with class 'content' should now read 'This paragraph has been updated.'", () => {
		const firstContentParagraph = document.querySelector("p.content");
		expect(firstContentParagraph.textContent).toBe(
			"This paragraph has been updated.",
		);
	});
	test("3d) The second paragraph with class 'content' should have a title attribute with the value 'Hover over me!'", () => {
		const secondContentParagraph = document.querySelectorAll("p.content")[1];
		expect(secondContentParagraph.getAttribute("title")).toBe("Hover over me!");
	});
	test("3e) The <ul> element with the id 'itemList' should have an additional class 'styled-list'. The <li> with the content '🍌 Banana' should no longer have the class 'list-item'.", () => {
		const itemList = document.getElementById("itemList");
		expect(itemList.classList.contains("styled-list")).toBe(true);

		const bananaItem = Array.from(itemList.children).find(
			(li) => li.textContent === "🍌 Banana",
		);
		expect(bananaItem.classList.contains("list-item")).toBe(false);
	});
	test("3f) The <li> element with the content '🍇 Date' should be removed from the DOM.", () => {
		const dateItem = Array.from(document.querySelectorAll("li")).find(
			(li) => li.textContent === "🍇 Date",
		);
		expect(dateItem).toBeUndefined();
	});
});
