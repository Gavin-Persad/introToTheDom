const fs = require("node:fs");
const path = require("node:path");

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

// Read the JS file
const js = fs.readFileSync(
	path.resolve(__dirname, "../index-ticket3.js"),
	"utf8"
);

describe("Learning Objective: Manipulating the DOM", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		const script = document.createElement("script");
		script.textContent = js;
		document.body.appendChild(script);
	});

	describe("3a: Success Criterion 1: Styling Elements", () => {
		test("should style the heading 'Intro to the DOM' correctly", () => {
			const title = document.getElementById("title");
			expect(title.style.color).toBe("red");
			expect(title.style.fontSize).toBe("30px");
		});
	});

	describe("3b: Success Criterion 2: Creating and Adding Elements", () => {
		test("should add a new paragraph with the correct text", () => {
			const paragraph = document.querySelector("body > p:last-child");
			expect(paragraph).not.toBeNull();
			expect(paragraph.textContent).toBe(
				"This is a dynamically added paragraph."
			);
		});
	});

	describe("3c: Success Criterion 3: Modifying Text", () => {
		test("should update the text of the first paragraph with class 'content'", () => {
			const firstContentParagraph = document.querySelector("p.content");
			expect(firstContentParagraph.textContent).toBe(
				"This paragraph has been updated."
			);
		});
	});

	describe("3d: Success Criterion 4: Modifying Attributes", () => {
		test("should add a title attribute to the second paragraph with class 'content'", () => {
			const secondContentParagraph = document.querySelectorAll("p.content")[1];
			expect(secondContentParagraph.getAttribute("title")).toBe(
				"Hover over me!"
			);
		});
	});

	describe("3e: Success Criterion 5: Adding and Removing Classes", () => {
		test("should add a class 'styled-list' to the <ul> and remove 'list-item' from the <li> with content '🍌 Banana'", () => {
			const itemList = document.getElementById("itemList");
			expect(itemList.classList.contains("styled-list")).toBe(true);

			const bananaItem = Array.from(itemList.children).find(
				(li) => li.textContent === "🍌 Banana"
			);
			expect(bananaItem.classList.contains("list-item")).toBe(false);
		});
	});

	describe("3f: Success Criterion 6: Removing Elements", () => {
		test("should remove the <li> element with the content '🍇 Date' from the DOM", () => {
			const dateItem = Array.from(document.querySelectorAll("li")).find(
				(li) => li.textContent === "🍇 Date"
			);
			expect(dateItem).toBeUndefined();
		});
	});
});
