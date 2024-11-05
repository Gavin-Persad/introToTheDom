const fs = require("node:fs");
const path = require("node:path");

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

// Read the JS file
const js = fs.readFileSync(
	path.resolve(__dirname, "../index-ticket2.js"),
	"utf8"
);

describe("Learning Objective: Traversing the DOM", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		const script = document.createElement("script");
		script.textContent = js;
		document.body.appendChild(script);
	});

	describe("2a: Success Criterion 1: Using parentNode", () => {
		test("should select the first <li> inside <ul> with id 'itemList'", () => {
			const firstLiElement = document.querySelector("#itemList li");
			expect(firstLiElement).not.toBeNull();
		});

		test("should log the parent <ul> element to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const firstLiElement = document.querySelector("#itemList li");
			const parentUlElement = firstLiElement.parentNode;
			expect(parentUlElement.id).toBe("itemList");
			expect(consoleLogSpy).toHaveBeenCalledWith(parentUlElement);
			consoleLogSpy.mockRestore();
		});
	});

	describe("2b: Success Criterion 2: Using childNodes", () => {
		test("should use childNodes to get all child nodes of <ul> with id 'itemList'", () => {
			const itemList = document.getElementById("itemList");
			const childNodes = itemList.childNodes;
			expect(childNodes).not.toBeNull();
		});

		test("should log the child nodes to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const itemList = document.getElementById("itemList");
			const childNodes = itemList.childNodes;
			expect(consoleLogSpy).toHaveBeenCalledWith(childNodes);
			consoleLogSpy.mockRestore();
		});
	});

	describe("2c: Success Criterion 3: Using children", () => {
		test("should use children to get all element children of <ul> with id 'itemList'", () => {
			const itemList = document.getElementById("itemList");
			const children = itemList.children;
			expect(children).not.toBeNull();
		});

		test("should log the element children to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const itemList = document.getElementById("itemList");
			const children = itemList.children;
			expect(consoleLogSpy).toHaveBeenCalledWith(children);
			consoleLogSpy.mockRestore();
		});
	});

	describe("2d: Success Criterion 4: Using firstElementChild and lastElementChild", () => {
		test("should use firstElementChild to get the first child of <ul> with id 'itemList'", () => {
			const itemList = document.getElementById("itemList");
			const firstChild = itemList.firstElementChild;
			expect(firstChild).not.toBeNull();
		});

		test("should use lastElementChild to get the last child of <ul> with id 'itemList'", () => {
			const itemList = document.getElementById("itemList");
			const lastChild = itemList.lastElementChild;
			expect(lastChild).not.toBeNull();
		});

		test("should log the first and last child nodes to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const itemList = document.getElementById("itemList");
			const firstChild = itemList.firstElementChild;
			const lastChild = itemList.lastElementChild;
			expect(consoleLogSpy).toHaveBeenCalledWith(firstChild);
			expect(consoleLogSpy).toHaveBeenCalledWith(lastChild);
			consoleLogSpy.mockRestore();
		});
	});
});
