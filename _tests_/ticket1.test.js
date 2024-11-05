const fs = require("node:fs");
const path = require("node:path");

// Read the HTML file
const html = fs.readFileSync(
	path.resolve(__dirname, "../../index.html"),
	"utf8"
);

// Read the JS file
const js = fs.readFileSync(path.resolve(__dirname, "../../index.js"), "utf8");

describe("Learning Objective: Selecting DOM Elements", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		const script = document.createElement("script");
		script.textContent = js;
		document.body.appendChild(script);
	});

	describe("1a: Success Criterion 1: Using getElementById", () => {
		test("should use getElementById('title')", () => {
			const getElementByIdSpy = jest.spyOn(document, "getElementById");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			expect(getElementByIdSpy).toHaveBeenCalledWith("title");
			getElementByIdSpy.mockRestore();
		});

		test("should log the correct element to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const titleElement = document.getElementById("title");
			expect(consoleLogSpy).toHaveBeenCalledWith(titleElement);
			consoleLogSpy.mockRestore();
		});
	});

	describe("1b: Success Criterion 2: Using getElementsByClassName", () => {
		test("should use getElementsByClassName('content')", () => {
			const getElementsByClassNameSpy = jest.spyOn(
				document,
				"getElementsByClassName"
			);
			document.dispatchEvent(new Event("DOMContentLoaded"));
			expect(getElementsByClassNameSpy).toHaveBeenCalledWith("content");
			getElementsByClassNameSpy.mockRestore();
		});

		test("should log the correct elements to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const contentElements = document.getElementsByClassName("content");
			expect(consoleLogSpy).toHaveBeenCalledWith(contentElements);
			consoleLogSpy.mockRestore();
		});
	});

	describe("1c: Success Criterion 3: Using getElementsByTagName", () => {
		test("should use getElementsByTagName('li')", () => {
			const getElementsByTagNameSpy = jest.spyOn(
				document,
				"getElementsByTagName"
			);
			document.dispatchEvent(new Event("DOMContentLoaded"));
			expect(getElementsByTagNameSpy).toHaveBeenCalledWith("li");
			getElementsByTagNameSpy.mockRestore();
		});

		test("should log the correct elements to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const liElements = document.getElementsByTagName("li");
			expect(consoleLogSpy).toHaveBeenCalledWith(liElements);
			consoleLogSpy.mockRestore();
		});
	});

	describe("1d: Success Criterion 4: Using querySelector", () => {
		test("should use querySelector('.highlight')", () => {
			const querySelectorSpy = jest.spyOn(document, "querySelector");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			expect(querySelectorSpy).toHaveBeenCalledWith(".highlight");
			querySelectorSpy.mockRestore();
		});

		test("should log the correct element to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const highlightElement = document.querySelector(".highlight");
			expect(consoleLogSpy).toHaveBeenCalledWith(highlightElement);
			consoleLogSpy.mockRestore();
		});
	});

	describe("1e: Success Criterion 5: Using querySelectorAll", () => {
		test("should use querySelectorAll('.highlight')", () => {
			const querySelectorAllSpy = jest.spyOn(document, "querySelectorAll");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			expect(querySelectorAllSpy).toHaveBeenCalledWith(".highlight");
			querySelectorAllSpy.mockRestore();
		});

		test("should log the correct elements to the console", () => {
			const consoleLogSpy = jest.spyOn(console, "log");
			document.dispatchEvent(new Event("DOMContentLoaded"));
			const highlightElements = document.querySelectorAll(".highlight");
			expect(consoleLogSpy).toHaveBeenCalledWith(highlightElements);
			consoleLogSpy.mockRestore();
		});
	});
});
